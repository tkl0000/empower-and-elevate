(() => {
    document.querySelectorAll('[data-href]').forEach(element =>{  // looping though all tags with 'data-href' in the page
        // setting an onclick event listener for the element
       element.onclick = () =>{
            console.log('hi')
            document.querySelectorAll('container').forEach(e => {
                e.classList.add('fade-out')
            })
           const link = element.dataset.href || element.getAttribute('data-href'); // getting the link from the 'data-href' attribute
           setTimeout(() => location.assign(link) , 2000) // navigate to a new website after 3s (3000ms)
       }
    })
})