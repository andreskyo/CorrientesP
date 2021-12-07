import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { JumbotronWrapper } from './common';

function ForgotPassword() {
	return (
		<JumbotronWrapper title="ForgotPassword">
			<Link to="/login">
				Back to login
			</Link>
		</JumbotronWrapper>
	)
}

export default memo(ForgotPassword);
