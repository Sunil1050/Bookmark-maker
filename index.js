// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/\
let siteNameEle = document.getElementById('siteNameInput');
let siteUrlEle = document.getElementById('siteUrlInput');
let siteNameErrEle = document.getElementById('siteNameErrMsg');
let siteUrlErrEle = document.getElementById('siteUrlErrMsg');
let formEle = document.getElementById('bookmarkForm');
let bookmarkListEle = document.getElementById('bookmarksList');

let formData = {
    siteName: "",
    siteUrl: ""
}
siteNameEle.addEventListener('change', function(event) {
    formData.siteName = event.target.value;
});

siteUrlEle.addEventListener('change', function(event) {
    formData.siteUrl = event.target.value;
});

function submitFormData(formData) {
    let {
        siteName,
        siteUrl
    } = formData;
    let listItems = document.createElement('li')
    bookmarkListEle.appendChild(listItems);
    let para = document.createElement('p');
    para.textContent = siteName;
    listItems.appendChild(para);
    let anchorEle = document.createElement('a');
    anchorEle.href = siteUrl;
    anchorEle.target = "_blank"
    anchorEle.style.color = "blue";
    anchorEle.textContent = siteUrl;
    listItems.appendChild(anchorEle);
    console.log(bookmarkListEle);
}

function validateFormData(formData) {
    let {
        siteName,
        siteUrl
    } = formData;
    if (siteName === "") {
        siteNameErrEle.textContent = "Required*";
    } else {
        siteNameErrEle.textContent = "";
    }
    if (siteUrl === "") {
        siteUrlErrEle.textContent = "Required*";
    } else {
        siteUrlErrEle.textContent = "";
    }
}



formEle.addEventListener('submit', function() {
    event.preventDefault();
    validateFormData(formData);
    submitFormData(formData);
})