document.querySelectorAll('.dv-dashboard-tab-btn').forEach(item => {
    item.addEventListener('click', () => {
        console.log(item.textContent)
    })
})