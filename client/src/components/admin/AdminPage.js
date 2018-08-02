import React, { Component } from 'react';
import sLogo from '../images/small-logo.png';

class AdminPage extends Component {
	render() {
		return (
			<div className="admin-wrapper">
				<div className="login-box text-center">
					<div className="col-sm-8 main-section">
						<div className="modal-content">
							<div className="col-12 user-img">
								<img src={sLogo} alt="logo" />
							</div>
							<form className="col-12">
								<div className="form-group admin-form-group">
									<input
										type="email"
										class="form-control"
										placeholder="Enter Email"
									/>
								</div>
								<div className="form-group admin-form-group">
									<input
										type="password"
										class="form-control"
										placeholder="Enter Password"
									/>
								</div>
								<button type="submit" class="btn admin-button">
									<i class="fas fa-sign-in-alt login-icon" />Login
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AdminPage;
