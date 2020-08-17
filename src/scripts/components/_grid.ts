const renderGrid = () => {
  // TODO: implement code to Render grid
};

function callAddForm(): void {
  $('#form').modal('show');
}

function submit(e: any): void {
  e.preventDefault();
  const tfType = $('#tfType').val();
  // const tfName = $('#tfName').val();
  // const tfModified = $('#tfModified').val();
  // const tfModifiedBy = $('#tfModifiedBy').val();
  console.log(tfType);
}
const btnSubmit = document.getElementById('btnSubmit');
btnSubmit?.addEventListener('click', submit);

const btnAdd = document.getElementById('btnAdd');
btnAdd?.addEventListener('click', callAddForm);

export default renderGrid;
