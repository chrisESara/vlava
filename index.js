var services = document.getElementById('Services')
var Original_Content = `<div>
            <div class="icon flex-shrink-0"><i class="bi bi-briefcase"></i></div>
            <div>
              <h4 class="title"><a href="service-details.html" class="stretched-link">title</a></h4>
              <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
            </div>`

            fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        json.forEach(element => {
          var content = Original_Content;
          content = content.replace('title',element.id)
        var service = document.createElement('div')
                service.innerHTML= content
                service.className='col-lg-4 col-md-6 service-item d-flex'
                services.appendChild(service)
      })
    })

            