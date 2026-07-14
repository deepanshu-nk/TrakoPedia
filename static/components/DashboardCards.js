export default {
    template: `
        <div class="row mt-4">
            <div class="col-md-3 mb-3">
                <div class="card shadow-sm">
                    <div class="card-body">
                        <h6>Total Treks</h6>
                        <h2>{{userdata.total_treks}}</h2>
                        <i class="bi bi-map fs-2 text-primary"></i>
                    </div>
                </div>
            </div>
            <div class="col-md-3 mb-3">
                <div class="card shadow-sm">
                    <div class="card-body">
                        <h6>Total tracks</h6>
                        <h2>120</h2>
                        <i class="bi bi-people fs-2 text-success"></i>
                    </div>
                </div>
            </div>
            <div class="col-md-3 mb-3">
                <div class="card shadow-sm">
                    <div class="card-body">
                        <h6>Total Staff</h6>
                        <h2>18</h2>
                        <i class="bi bi-person-badge fs-2 text-warning"></i>
                    </div>
                </div>
            </div>
            <div class="col-md-3 mb-3">
                <div class="card shadow-sm">
                    <div class="card-body">
                        <h6>Total Bookings</h6>
                        <h2>185</h2>
                        <i class="bi bi-calendar-check fs-2 text-danger"></i>
                    </div>
                </div>
            </div>
        </div>
    `,
    data: function () {
        return {
            userdata: {}
        }
    },
    mounted() {
        fetch('/api/admin/dashboard', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => this.userdata = data)
    }
}