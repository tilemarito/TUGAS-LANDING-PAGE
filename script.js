// Tambahkan kode JavaScript kalian di file ini
const form = document.getElementById('form');

const handleGetFormData = () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const city = document.getElementById('city').value;
    let zipCode = document.getElementById('zip-code').value;
    const status = document.getElementById('status').checked;

    return {
        name,
        email,
        city,
        zipCode,
        status,
    };
};

function isNumber(string) {
    if (isNaN(string)) {
        return false;
    }else{
        return true;
    }
}

const checkboxIsChecked = () => {
    const status = document.getElementById('status').checked;
    if (status) {
        return true;
    } else {
        return false;
    }
};

function validateFormData(isiform) {
    if (isiform.name == null || isiform.city == null || isiform.email == null || isiform.zipCode == null || !checkboxIsChecked() || !isNumber(isiform.zipCode)){
        return false;
    }else{
        return true;
    }
};

function submit() {
    const warning = document.getElementById('warning');
    if (!validateFormData(handleGetFormData())) {
        warning.innerHTML = "Periksa form anda sekali lagi";
    } else {
        warning.innerHTML = ""
    }
}

form.addEventListener('submit', submit);