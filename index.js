fetch('https://vlava-api.onrender.com/services')
  .then(response => response.json())
  .then(data => {
    let services = document.getElementById('srvcs');
    data.forEach(element => {
      let e = document.createElement('div');
      let content = `<div class="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="100">
            <div class="icon flex-shrink-0"><i class="${element.icon}"></i></div>
            <div>
              <h4 class="title"><a href="service-details.html" class="stretched-link">${element.title}</a></h4>
              <p class="description">${element.description}</p>
            </div>
          </div>`;
      e.innerHTML = content;
      services.appendChild(e);
    });
  });
