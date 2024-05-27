document.querySelector ('.cmp__form').addEventListener ('submit', handleSubmit);
const firstNameEl = document.getElementById ('cmp__input--first-name');
const lastNameEl = document.getElementById ('cmp__input--last-name');
const emailEl = document.getElementById ('cmp__input--email');
const passwordEl = document.getElementById ('cmp__input--password');

function handleSubmit (e)
{
    console.log ('yes');
    e.preventDefault ();

    checkInput (firstNameEl);
    checkInput (lastNameEl);
    checkInput (emailEl);
    checkInput (passwordEl);
}

function checkInput (container)
{
    const input = container.querySelector ('.cmp__input');

    const result = checkInputValue (input);

    if (result)
    {
        container.classList.add ('invalid');
        container.querySelector ('.cmp__input-error').textContent = result;
        return;
    }

    container.classList.remove ('invalid');
}

function checkInputValue (input)
{
    if (input.dataset.required && !input.value)
        return `${input.name} cannot be empty`;

    if (input.dataset.minlength && input.value.length < Number (input.dataset.minlength))
        return `${input.name} must be at least 2 characters in length`;

    if (input.dataset.isemail && !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test (input.value))
        return `Must be a valid email`;

    return '';
}


