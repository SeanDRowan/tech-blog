const postFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#post-title').value.trim();
    const contents = document.querySelector('#post-contents').value.trim();
  
      const response = await fetch('/dashboard/post', {
        method: 'POST',
        body: JSON.stringify({ title, contents }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in.');
      }
   
  };
  document
  .querySelector('.login-form')
  .addEventListener('submit', postFormHandler);