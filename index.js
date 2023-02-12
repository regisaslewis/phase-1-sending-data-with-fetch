function submitData(userName, userEmail) {
    const userData = {
        name: userName,
        email: userEmail,
    };

    const userConfigObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(userData),
    };

    return fetch("http://localhost:3000/users", userConfigObject)
            .then(function (response) {
                return response.json();
            })
            .then(function (object) {
                document.body.textContent = object.id;
            })
            .catch(function (error) {
                document.body.textContent = error.message;
            });
}