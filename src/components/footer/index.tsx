import * as React from 'react'
function Footer(){
   return (
    <div className="footer bg-secondary text-white pd-16px">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <p>
                    Powered by <a href="http://git.oschina.net/mumu-osc/NiceFish" target="_blank">NiceFish</a>
                </p>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <a href='https://gitee.com/mumu-osc/NiceFish/stargazers' target="_blank" >
                    <img src='https://gitee.com/mumu-osc/NiceFish/badge/star.svg?theme=dark' alt='star' />
                </a>
            </div>
        </div>
    </div>
</div>
   )
}
export default Footer