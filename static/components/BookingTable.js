import Navbar from "./Navbar.js"

export default {
    Component: {
        Navbar
    },
    template: `
        <div class="card mt-4 shadow-sm">
            <div class="card-header">
                <h5 class="mb-0">
                    Recent Bookings
                </h5>
            </div>
            <table class="table table-hover mb-0">
                <thead class="table-light">
                    <tr>
                        <th>ID</th>
                        <th>Track Name</th>
                        <th>Location</th>
                        <th>Description</th>
                        <th>Difficulty</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{result.id}}</td>
                        <td>{{result.trek_name}}</td>
                        <td>{{result.location}}</td>
                        <td>{{result.description}}</td>
                        <td>
                            <span class="badge bg-success">
                                Booked
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>B002</td>
                        <td>Priya Patel</td>
                        <td>Roopkund Trek</td>
                        <td>11 May 2026</td>
                        <td>
                            <span class="badge bg-success">
                                Booked
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>B003</td>
                        <td>Rahul Verma</td>
                        <td>Kedarkantha Trek</td>
                        <td>10 May 2026</td>
                        <td>
                            <span class="badge bg-danger">
                                Cancelled
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,
    data: function () {
        return {
            result: {}
        }
    },
    mounted() {
        fetch('/api/treks', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => this.result = data)
    }
}
