
export function toggleAbledInputs(value) {
  const elem = document.getElementById('MultiStepForm');
  const inputs = elem.getElementsByTagName('input');

  for (let i = 0; i < inputs.length; i++) {
      inputs[i].disabled = value;
  }
}
