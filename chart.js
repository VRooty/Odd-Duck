function renderChart() {
    const ctx = document.getElementById("myChart");
  
    const labels = [];
    const views = [];
    const clicks = [];
  
    for (let i = 0; i < products.length; i++) {
      labels.push(products[i].name);
      views.push(products[i].views);
      clicks.push(products[i].clicks);
    }
  
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "# of views",
            data: views,
            borderWidth: 1,
          },
        ],
      },
    });
  }