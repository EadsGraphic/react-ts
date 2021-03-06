import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <section className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                    <h1 className="x-large">Developer Connector</h1>
                    <p className="lead">
                        Create a developer profile/portfolio, share posts and get help from other developers
                        {console.log('Landing Page rendered')}
                    </p>
                    <div className="buttons">
                        <Link to={'/register'} className="btn btn-primary">
                            Register
                        </Link>

                        <Link className="btn btn-light" to={'/login'}>
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LandingPage;
