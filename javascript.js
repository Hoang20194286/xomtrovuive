function thongtinchitiet(ten='',tuoi='',quequan='',moiquanhe='',instagram=''){
    const main=document.getElementById('thong-tin-chi-tiet-tong');
    if(main){
        const thongtinchitiet =document.createElement('div');
        thongtinchitiet.classList.add('thong-tin-chi-tiet');
        thongtinchitiet.innerHTML=`
        <div id="thong-tin-chi-tiet">
        <!-- khối div chứa họ và tên -->
        <div class="thong-tin-con" style="margin-top:50px;">
            <div class="tieu-de">HỌ VÀ TÊN</div>
            <input type="text" id="noi-dung" disabled="disabled" placeholder="${ten}">
        </div>
    
        <div class="thong-tin-con">
            <div class="tieu-de">TUỔI</div>
            <input type="text" id="noi-dung" disabled="disabled" placeholder="${tuoi}">
        </div>
        <div class="thong-tin-con">
            <div class="tieu-de">QUÊ QUÁN</div>
            <input type="text" id="noi-dung" disabled="disabled" placeholder="${quequan}">
        </div>      
        <div class="thong-tin-con">
            <div class="tieu-de">MỐI QUAN HỆ       </div>
            <input type="text" id="noi-dung" disabled="disabled" placeholder="${moiquanhe}">
            </div>      
        <div class="thong-tin-con">
            <div class="tieu-de">INSTAGRAM     </div>
            <input type="text" id="noi-dung" disabled="disabled" placeholder="${instagram}">
        </div>
            <button onclick="exit();" id="Exit">ĐÓNG</button>
            <!-- tạo script cho nút đóng -->
    <script>
        
    </script>   
    </div>  
        `;
        main.appendChild(thongtinchitiet);
    }
    }
    function exit(){
        document.getElementById('thong-tin-chi-tiet').style.animation='fadeOut linear 1s forwards';
    }
    function TRI(){
        thongtinchitiet(
            'NGUYỄN VĂN TRÍ',
            '21',
            'NINH BÌNH',
            'ĐỘC THÂN',
            'CHƯA CÓ'
        )
    }function KHANH(){
        thongtinchitiet(
            'VŨ HOÀNG SƠN KHÁNH',
            '22',
            'NINH BÌNH',
            'ĐỘC THÂN',
            'CHƯA CÓ'
        )
    }
    function TRANG(){
        thongtinchitiet(
            'NGUYỄN MAI TRANG',
            '16',
            'THANH HÓA',
            'ĐỘC THÂN',
            'myke_treg'
        )
    }
    function PHUONGANH(){
        thongtinchitiet(
            'VŨ PHƯƠNG ANH',
            '22',
            'BẮC GIANG',
            'HẸN HÒ',
            'Phanhhhvu'
        )
    }
    function PHAMTU(){
        thongtinchitiet(
            'PHẠM TÚ',
            '21',
            'YÊN BÁI',
            'HẸN HÒ',
            'CHƯA CÓ'
        )
    }
    function HATRANG(){
        thongtinchitiet(
            'HÀ TRANG',
            '22',
            'BẮC GIANG',
            'ĐỘC THÂN',
            'CHƯA CÓ'
        )
    }
    function KHANHLINH(){
        thongtinchitiet(
            'VŨ KHÁNH LINH',
            '21',
            'HẢI PHÒNG',
            'ĐỘC THÂN',
            'study_vkhanlin'
        )
    }
    function PHUONG(){
        thongtinchitiet(
            'LÊ KIM PHƯỢNG',
            '21',
            'NINH BÌNH',
            'ĐỘC THÂN',
            'CHƯA CÓ'
        )
    }
    function NGOTRANG(){
        thongtinchitiet(
            'NGÔ TRANG',
            '22',
            'NINH BÌNH',
            'ĐỘC THÂN',
            'CHƯA CÓ'
        )
    }
    
    function MINH(){
        thongtinchitiet(
            'ĐINH BÌNH MINH',
            '16',
            'NINH BÌNH',
            'ĐỘC THÂN',
            'k0ncaa_'
        )
    }
