// This function checks the login status of the user by making a GET request to the server API.
// If the user is logged in, it calls the 'handelUserData' function with the user data.
// Otherwise, it calls 'handelUserData' without any user data, showing the login form.
function loginStatus() {
    loader(true); // Show loader while checking login status

    fetch("https://api.shipap.co.il/login", {
        credentials: 'include',
    })
    .then(res => {
        if (res.ok) {
            return res.json();
        } else {
            return res.text().then(x => {
                throw new Error(x);
            });
        }
    })
    .then(data => {
        handelUserData(data);
    })
    .catch(err => {
        handelUserData();
    })
    .finally(() => {
        loader(false);
    });
}

// This function handles the user login process.
// It retrieves the username and password from the login form, sends them to the server API with a POST request.
// If the login is successful, it calls 'handelUserData' with the user data and shows a success message.
// If the login fails, it calls 'handelUserData' without user data and displays an error message.
function login() {
    const obj = {
        userName: document.querySelector('#userName').value,
        password: document.querySelector('input[type=password]').value,
    };

    loader(true); // Show loader while sending login request

    fetch("https://api.shipap.co.il/login", {
        method: 'POST',
        credentials: 'include', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
    })
    .then(res => {
        if (res.ok) {
            return res.json();
        } else {
            return res.text().then(x => {
                throw new Error(x);
            });
        }
    })
    .then(data => {
        handelUserData(data);
    })
    .catch(err => {
        handelUserData();
        alert(err.message);
    })
    .finally(() => {
        loader(false);
    });
}

// This function handles the user data received from the server API.
// If a user is logged in (user data is provided), it shows the user information and products.
// If no user is logged in (user data is null), it shows the login form and prompts the user to log in.
function handelUserData(user = null) {
    const divLogin = document.querySelector(".login");
    const divUser = document.querySelector(".user");

    if (user) {
        // If a user is logged in, display user information and products
        divLogin.style.display = 'none';
        divUser.style.display = 'block';
        divUser.innerHTML = `${user.fullName} מחובר!`;
        snackbar(`${user.fullName} מחובר!`);
        getProducts();
    } else {
        // If no user is logged in, show the login form
        divLogin.style.display = 'block';
        divUser.style.display = 'none';
        snackbar(`יש להתחבר תחילה`);
        loader(false);
    }
}

// This function fetches the list of products from the server API and displays them in a table.
// It also shows an editable section for each product, allowing the user to modify the product data.
function getProducts() {
    loader(true); // Show loader while fetching products

    fetch("https://api.shipap.co.il/products", {
        credentials: 'include',
    })
    .then(res => res.json())
    .then(data => {
        document.querySelector(".products").style.display = "block"; // Display the products table
        const tbody = document.querySelector(".products tbody");
        tbody.innerHTML = ''; // Clear existing product data

        data.forEach((p, i) => {
            const tr = document.createElement("tr");

            // Populate the table row with product data and buttons for editing/removing
            tr.innerHTML = `
                <td>${i + 1}</td>
                <td contenteditable="true" oninput="showSaveBtn(this)" class="name">${p.name}</td>
                <td contenteditable="true" oninput="showSaveBtn(this)" class="price">${p.price}</td>
                <td contenteditable="true" oninput="showSaveBtn(this)" class="discount">${p.discount}</td>
                <td>
                    <button class="save" onclick="saveProduct(${p.id}, this)">💾</button>
                    <button class="remove" onclick="removeProduct(${p.id}, this)">❌</button>
                </td>
            `;

            tbody.appendChild(tr);
        });

        // Update the total number of products in the footer
        document.querySelector("tfoot td").innerHTML = data.length + 1;
        loader(false); // Hide loader after products are loaded
    });
}

// This function shows the "Save" button when the user edits a product's information in the table.
function showSaveBtn(tdElem) {
    tdElem.closest('tr').querySelector('.save').style.visibility = 'visible';
}

// This function saves the changes made to a product by sending an updated object to the server API with a PUT request.
// It hides the "Save" button after successful save and displays a success message.
function saveProduct(id, btnElem) {
    const tr = btnElem.closest('tr');

    const obj = {
        name: tr.querySelector('.name').innerText,
        price: +tr.querySelector('.price').innerText,
        discount: +tr.querySelector('.discount').innerText,
    };

    loader(true); // Show loader while saving the product

    fetch(`https://api.shipap.co.il/products/${id}`, {
        method: 'PUT',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
    })
    .then(() => {
        btnElem.closest('tr').querySelector('.save').style.visibility = 'hidden'; // Hide the "Save" button
        loader(false); // Hide loader after saving the product
        snackbar("הפריט נשמר בהצלחה"); // Show success message
    });
}

// This function adds a new product to the list by sending the product data to the server API with a POST request.
// It clears the input fields after adding the product and displays a success message.
function addProduct() {
    const name = document.querySelector('#name');
    const price = document.querySelector('#price');
    const discount = document.querySelector('#discount');

    const obj = {
        name: name.value,
        price: +price.value,
        discount: +discount.value,
    };

    name.value = '';
    price.value = '';
    discount.value = '';

    loader(true); // Show loader while adding the product

    fetch("https://api.shipap.co.il/products", {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
    })
    .then(res => res.json())
    .then(data => {
        getProducts(); // Refresh the product list after adding the product
        snackbar("הפריט נוסף בהצלחה"); // Show success message
    });
}

// This function removes a product from the list by sending a DELETE request to the server API with the product ID.
// It prompts the user for confirmation before deleting the product and displays a success message after deletion.
function removeProduct(id, btnElem) {
    if (!confirm("האם אתה בטוח כי ברצונך למחוק את הפריט מהרשימה שלנו?")) {
        return;
    }

    if (!confirm("בטוח?")) {
        return;
    }

    loader(true); // Show loader while removing the product

    fetch(`https://api.shipap.co.il/products/${id}`, {
        method: 'DELETE',
        credentials: 'include',
    })
    .then(() => {
        btnElem.closest('tr').remove(); // Remove the product row from the table
        loader(false); // Hide loader after removing the product
        snackbar("הפריט נמחק בהצלחה"); // Show success message
    })
}

// This function toggles the visibility of a loader element on the UI.
function loader(isShow) {
    const elem = document.querySelector('.loaderFrame');

    if (isShow) {
        elem.style.display = 'flex'; // Show the loader
    } else {
        elem.style.display = 'none'; // Hide the loader
    }
}

// This function displays a temporary snackbar notification on the UI with the provided text.
function snackbar(text) {
    const elem = document.querySelector("#snackbar");
    elem.innerHTML = text;
    elem.classList.add("show"); // Show the snackbar

    setTimeout(() => elem.classList.remove("show"), 3 * 1000); // Hide the snackbar after 3 seconds
}
