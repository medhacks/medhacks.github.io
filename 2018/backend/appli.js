var form = document.getElementById("myForm");
form.addEventListener("submit", handleFormSubmit);


function handleFormSubmit(event) {

   event.preventDefault();

   // Call our function to get the form data.
   //data is our json object
   var data = formToJSON(form.elements);

   // Use `JSON.stringify()` to make the output valid, human-readable JSON.
   var output = JSON.stringify(data, null, "  ");
   alert(output);

};

const formToJSON = elements => [].reduce.call(elements, (data, element) => {

  // Make sure the element has the required properties and should be added.
  if (isValidElement(element) && isValidValue(element)) {

    if (isCheckbox(element)) {
      data[element.name] = (data[element.name] || []).concat(element.value);
    } else if (isMultiSelect(element)) {
      data[element.name] = getSelectValues(element);
    } else {
      data[element.name] = element.value;
    }
  }

  return data;
}, {});

const isValidValue = element => {
  return (!['checkbox', 'radio'].includes(element.type) || element.checked);
};

const isCheckbox = element => element.type === 'checkbox';

const isMultiSelect = element => element.options && element.multiple;

const isValidElement = element => {
  return element.name && element.value;
};
const getSelectValues = options => [].reduce.call(options, (values, option) => {
  return option.selected ? values.concat(option.value) : values;
}, []);
