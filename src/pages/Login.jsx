import React from 'react';
import { Link } from 'react-router-dom';
import Banner from 'src/components/Banner/Banner';
import Helmet from 'src/components/Helmet/Helmet';

const Login = () => {
  return (
    <Helmet title="Đăng nhập" >
      <Banner />
      <main id="main" className="main clearfix">
        <div className="container">
          <div className="form-login">
            <h2 className="header-title">Đăng nhập</h2>
            <form
              className="form-horizontal"
              id="login-form"
              action="/login"
              method="GET"
            >
              <div className="regis control-group form-group">
                <label
                  className="col-sm-3 control-label  required"
                  htmlFor="LoginForm_username"
                >
                  Tên đăng nhập/Email
                  <span className="required">*</span>
                </label>
                <div className="controls col-sm-9">
                  <input
                    className="span9 form-control"
                    name="LoginForm[username]"
                    id="LoginForm_username"
                    type="text"
                  />
                  <div
                    className="errorMessage"
                    id="LoginForm_username_em_"
                    style={{ display: "none" }}
                  >
                    Tên đăng nhập không hợp lệ
                  </div>
                </div>
              </div>
              <div className="regis control-group form-group">
                <label
                  className="col-sm-3 control-label  required"
                  htmlFor="LoginForm_password"
                >
                  Mật khẩu <span className="required">*</span>
                </label>
                <div className="controls col-sm-9">
                  <input
                    className="span9 form-control"
                    name="LoginForm[password]"
                    id="LoginForm_password"
                    type="password"
                  />
                  <div
                    className="errorMessage"
                    id="LoginForm_password_em_"
                    style={{ display: "none" }}
                  >
                    Mật khẩu không hợp lệ.
                  </div>
                </div>
              </div>
              <div className="form-group" style={{ paddingTop: 10 }}>
                <div className="col-sm-offset-3 col-sm-9">
                  <input
                    tabIndex={10}
                    className="btn btn-primary"
                    type="submit"
                    name="yt0"
                    Value="Đăng nhập"
                  />{" "}
                  <Link to="/signup" className="btn btn-info">
                    Đăng ký
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>


    </Helmet >
  )
}

export default Login