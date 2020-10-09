import React from 'react';

class Blocks extends React.Component {
    render() {
        return <div class="Sign-in">
            <h5>Đăng kí nhận bài viết mỗi ngày</h5>
            <p class="sign-in">Công nghệ đang thay đổi nhanh chóng hãy cùng vươn ra thế giới với những bài viết chất lượng từ tôi bạn nhé ! </p>
            <input value="Tên của bạn"></input><br></br>
            <input value="Email của bạn"></input>

            <p class="sign-in">
                <input id="check-box" type="checkbox">

                </input>
                     I agree to the form and I have read and acknowledge</p>
            <button>Đăng kí</button>
            <p class="sign-in">Bạn sẽ nhận được Email thông báo khi có bài viết mới mà không spam vì mình cũng rất ghét :))</p>
        </div>



    }
}

export default Blocks;