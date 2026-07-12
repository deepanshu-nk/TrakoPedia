export default {
    template: `
        <div class="container">
            <h1>Login</h1>
            <form @submit.prevent="login">
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" v-model="formData.email" required>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" v-model="formData.password" required>
                </div>
                <button type="submit" class="btn btn-primary w-100" >Login</button>
            </form>
        </div>
    `,

    data: function () {
        return {
            formData: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        login: function () {
            fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.formData)
            })
                .then(response => response.json())
                .then(data => {
                    localStorage.setItem("auth_token", data["auth_token"]); // Store the token in localStorage
                    localStorage.setItem("user_id", data.id);
                    this.$router.push('/'); // Redirect to home page after successful login
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
    }
}