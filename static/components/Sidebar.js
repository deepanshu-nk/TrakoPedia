export default {
    template: `
    <div class="bg-white border-end vh-100 shadow-sm" style="width:250px;">

        <div class="p-3 border-bottom">
            <h5 class="fw-bold">
                <i class="bi bi-tree-fill text-success"></i>
                Trekking
            </h5>
        </div>

        <div class="nav flex-column mt-3">

            <a class="nav-link active" href="#/admin/dashboard">
                <i class="bi bi-speedometer2"></i>
                Dashboard
            </a>

            <a class="nav-link" href="#/treks">
                <i class="bi bi-map"></i>
                Treks
            </a>

            <a class="nav-link" href="#/staff">
                <i class="bi bi-person-badge"></i>
                Trek Staff
            </a>

            <a class="nav-link" href="#/users">
                <i class="bi bi-people"></i>
                Users
            </a>

            <a class="nav-link" href="#/bookings">
                <i class="bi bi-calendar-check"></i>
                Bookings
            </a>

            <a class="nav-link" href="#/reports">
                <i class="bi bi-bar-chart"></i>
                Reports
            </a>

            <a class="nav-link text-danger" href="#/login">
                <i class="bi bi-box-arrow-right"></i>
                Logout
            </a>

        </div>

    </div>
    `
}