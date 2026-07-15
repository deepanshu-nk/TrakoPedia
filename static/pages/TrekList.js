export default {
    Component: {
        Sidebar,
        Navbar,
    },
    template: `
        <div class="d-flex">
            <Sidebar />
            <div class="flex-grow-1 bg-light">
                <Navbar />
                <div class="container-fluid p-4">
                    <div class="card mt-4 shadow-sm">
                        <div class="card-header">
                            <h5 class="mb-0">
                                Treks List
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
                                    <th>Duration</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="trek in result" :key="trek.id">
                                    <td>{{trek.id}}</td>
                                    <td>{{trek.trek_name}}</td>
                                    <td>{{trek.location}}</td>
                                    <td>{{trek.description}}</td>
                                    <td>{{trek.difficulty}}</td>
                                    <td>{{trek.duration}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    `,
    data: function () {
        return {
            result: []
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