export default {
    template: `
        <div class="container">
            <h1>Register</h1>
            <form @submit.prevent="register">
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" v-model="formData.email" required>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" v-model="formData.password" required>
                </div>
                <div class="mb-3">
                    <label for="first_name" class="form-label">First Name</label>
                    <input type="text" class="form-control" id="first_name" v-model="formData.first_name" required>
                </div>
                <div class="mb-3">
                    <label for="last_name" class="form-label">Last Name</label>
                    <input type="text" class="form-control" id="last_name" v-model="formData.last_name" required>
                </div>

                <div class="mb-3">
                    <label for="phone" class="form-label">Phone Number</label>
                    <input type="text" class="form-control" id="phone" v-model="formData.phone_number" required>
                </div>

                <div class="mb-3">
                    <label for="address" class="form-label">Address</label>
                    <input type="text" class="form-control" id="address" v-model="formData.address" required>
                </div>

                <button type="submit" class="btn btn-primary" @click="register">Register</button>
            </form>
        </div>
    `,

    data: function () {
        return {
            formData: {
                email: '',
                password: '',
                first_name: '',
                last_name: '',
                phone_number: '',
                address: ''
            }
        }
    },
    methods: {
        register: function () {
            fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.formData)
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                    this.$router.push('/login'); // Redirect to login page after successful registration
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
    }
}


