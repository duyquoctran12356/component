import React from 'react';
import './App.css';
import Contents from './component/contents.js';
import Blocks from './component/blocks.js';
import NewFeed from './component/newfeed.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div class="background">
          <h2>SERIES: REACT JS</h2>
          <div class="contents">
            <Contents
              img='./2.png'
              title="HƯỚNG DẪN HỌC REACT JS"
              text="Hướng dẫn học React js sao cho hiệu quả!Nếu bạn mới làm quen với React (hoặc phần front-end thì..."
            />
            <Contents
              img='./1.jpg'
              title="HƯỚNG DẪN CẤU TRÚC THƯ MỤC COMPONENT"
              text="Sau một thời gian tìm hiểu và áp dụng rất hiệu quả , hôm nay mình chia sẻ với các bạn cấu trúc thư..."
            />
            <Contents
              img='./5.jpg'
              title="HƯỚNG DẪN SỬ DỤNG REDUX HIỆU QUẢ TRONG ỨNG DỤNG REACT"
              text="Có những thời điểm eo hẹp về thời gian, lẫn kiến thức khiến Fullstack Station không thể tạo ra nội dung mới để đáp ứng đủ nhu cầu, sự mong đợi của mọi người. Nay với sự thay đổi về tên miền, 
              Fullstack Station sẽ thoát khỏi vỏ bọc là 1 blog đơn thuần và sẽ cung cấp nhiều bài viết chất lượng hơn nữa..."
            />
            <Contents
              img='./4.jpg'
              title="VÒNG ĐỜI CỦA COMPONENT TRONG REACTJS VỚI ES6"
              text="Khóa học này sẽ giúp bạn biết về một số chức năng chính cần thiết để sắp xếp, lọc và phân loại thông tin trong cơ sở dữ liệu,
              chỉnh sửa và mở nó từ hệ thống tệp cục bộ trong trình duyệt của bạn."
            />
            <Contents
              img='./3.jpg'
              title="HƯỚNG DẪN CÀI ĐẶT WEBPACK"
              text="Redux là một thư viện JavaScript mã nguồn mở để quản lý trạng thái ứng dụng. Nó được sử dụng phổ biến nhất với các thư viện như React hoặc Angular để xây dựng giao diện người dùng. 
              Tương tự như kiến ​​trúc Flux của Facebook, nó được tạo bởi Dan Abramov và Andrew Clark."
            />
          </div>
          <div class="block">
            <Blocks />
            <div class="new_feeds">
              <div class="newfeed-title">BÀI VIẾT MỚI</div>

              <NewFeed img='./3.jpg'
                title="Hướng dẫn học react"
                text="Th11 28 2018 | Công nghệ,Hệ điều hành,máy hủ web,Môi trường phát triển" />
              <NewFeed img='./5.jpg'
                title="FullStack Station chuyển tên miền từ Business Card"
                text="Khóa học lập trình C++ cơ bản cho người mới bắt đầu. Khóa học này sẽ cung cấp" />
              <NewFeed img='./4.jpg'
                title="Hướng dẫn học react sao cho hiệu quả"
                text="Học tập cùng chuyên gia,
                        tham gia khoá học lập trình để nâng cao kỹ năng bản thân!" />
              <NewFeed img='./1.jpg'
                title="JavaScript cơ bản"
                text="Giúp học viên nắm vững các nguyên tắc và cú pháp cơ bản trong Javascript - ngôn ngữ...." />
            </div>
          </div>


        </div>

      </div>
    )
  }
}

// function Letter(props) {
//   let Style = {
//     float: "left",
//     fontSize: "60px",
//     backgroundColor: props.bgColor,
//     marginLeft: "10px",
//   }
//   return <div style={Style}>{props.text}</div>
// }


export default App;
