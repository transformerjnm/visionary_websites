
//on load 
window.addEventListener('load', function () {
    /*page transition*/
    let body = document.querySelector('body');
    body.classList.add('page_transition');
    //---------title animation----------
    if (document.getElementById("title")) {
        var title = document.getElementById("title");
        title.classList.add("fade_in"); //title animation   
    }
});

// ------ add playback time to smoke video ------
if (document.getElementById("video")) {
    let video = document.getElementById("video");
    video.playbackRate = 0.5; //changes the rate the video plays
}

//------scroll animations-------
window.addEventListener('scroll', () => {


    animate_contact_services_area_h3();
    animate_contact_services_area_p();
    animate_contact_services_area_contact();
    animate_repair();
    animate_who_we_are_h3();
    animate_who_we_are_p();
    animate_who_we_are_questions();
    animate_footer_h3();
    animate_footer_li();
    animate_footer_button();




}); //end of scroll event



//functions

//services area h3
function animate_contact_services_area_h3() {

    //h3 in contact services area
    if (document.getElementById("header_3")) {

        let area_title = document.getElementById("header_3"); //selects the h3 tag
        let area_position = area_title.getBoundingClientRect().top; //gets the top position of h3
        let screen_position = window.innerHeight; //gets the height of the window

        /*scrolled into viewport and has not scrolled out of viewport add class*/
        if (area_position < screen_position && area_position > 0) {
            area_title.classList.add("slide_in_right");
        }
        /*in viewport scrolling up and not out of viewport*/
        if (area_position > 0 && area_position < screen_position) {
            area_title.classList.add("slide_in_right");
        }
        /*if scrolled passed remove class*/
        if (area_position < 0) {
            area_title.classList.remove("slide_in_right");
        }
        /*if scrolled about remove class*/
        if (area_position > screen_position) {
            area_title.classList.remove("slide_in_right");
        }

    }


}
//services area paragraph
function animate_contact_services_area_p() {


    if (document.getElementById("paragraph")) {

        let area_paragraph = document.getElementById("paragraph"); //selects the paragrpah
        let area_paragraph_position = area_paragraph.getBoundingClientRect().top; //gets top position
        let screen_position = window.innerHeight; //gets the height of the window

        if (area_paragraph_position < screen_position) {

            area_paragraph.classList.add("slide_in_left");

        }

        /*in viewport scrolling up and not out of viewport*/
        if (area_paragraph_position > 0 && area_paragraph_position < screen_position) {
            area_paragraph.classList.add("slide_in_left");
        }
        /*if scrolled passed remove class*/
        if (area_paragraph_position < 0) {
            area_paragraph.classList.remove("slide_in_left");
        }
        /*if scrolled about remove class*/
        if (area_paragraph_position > screen_position) {
            area_paragraph.classList.remove("slide_in_left");
        }

    }

}

//services area title and button
function animate_contact_services_area_contact() {

    if (document.getElementById("contact_area")) {


        let contact_area_div = document.getElementById("contact_area"); //selects the area
        let contact_area_position = contact_area_div.getBoundingClientRect().top; //top position
        let screen_position = window.innerHeight; //user's height of window

        if (contact_area_position < screen_position) {

            contact_area_div.classList.add("fade_in");

        }

        /*in viewport scrolling up and not out of viewport*/
        if (contact_area_position > 0 && contact_area_position < screen_position) {
            contact_area_div.classList.add("fade_in");
        }
        /*if scrolled passed remove class*/
        if (contact_area_position < 0) {
            contact_area_div.classList.remove("fade_in");
        }
        /*if scrolled about remove class*/
        if (contact_area_position > screen_position) {
            contact_area_div.classList.remove("fade_in");
        }


    }

}

//i need repair and 24/7 repair
function animate_repair() {

    if (document.getElementById("i_need_repair" && document.getElementById("emergency"))) {

        let repair = document.getElementById("i_need_repair"); //selects title and button
        let repair_emergancy = document.getElementById("emergancy");
        let repair_position = repair.getBoundingClientRect().top; //top position of repair
        let screen_position = window.innerHeight; //screen height


        if (repair_position < screen_position) {

            repair.classList.add("fade_in");
            repair_emergancy.classList.add("pop_in");
        }


        /*in viewport scrolling up and not out of viewport*/
        if (repair_position > 0 && repair_position < screen_position) {
            repair.classList.add("fade_in");
            repair_emergancy.classList.add("pop_in");
        }
        /*if scrolled passed remove class*/
        if (repair_position < 0) {
            repair.classList.remove("fade_in");
            repair_emergancy.classList.remove("pop_in");
        }
        /*if scrolled about remove class*/
        if (repair_position > screen_position) {
            repair.classList.remove("fade_in");
            repair_emergancy.classList.remove("pop_in");
        }

    }

}

//who we are
function animate_who_we_are_h3() {

    if (document.getElementById("who_header")) {

        let who_header = document.getElementById("who_header");
        let who_header_position = who_header.getBoundingClientRect().top;
        let screen_position = window.innerHeight;

        if (who_header_position < screen_position) {

            who_header.classList.add("slide_in_right");

        }

        /*in viewport scrolling up and not out of viewport*/
        if (who_header_position > 0 && who_header_position < screen_position) {

            who_header.classList.add("slide_in_right");

        }
        /*if scrolled passed remove class*/
        if (who_header_position < 0) {

            who_header.classList.remove("slide_in_right");

        }
        /*if scrolled about remove class*/
        if (who_header_position > screen_position) {

            who_header.classList.remove("slide_in_right");

        }

    }


}

function animate_who_we_are_p() {

    if (document.getElementById("who_p")) {

        let who_p = document.getElementById("who_p");
        let who_p_position = who_p.getBoundingClientRect().top;
        let screen_position = window.innerHeight;

        if (who_p_position < screen_position) {

            who_p.classList.add("slide_in_left");

        }

        /*in viewport scrolling up and not out of viewport*/
        if (who_p_position > 0 && who_p_position < screen_position) {

            who_p.classList.add("slide_in_left");

        }
        /*if scrolled passed remove class*/
        if (who_p_position < 0) {

            who_p.classList.remove("slide_in_left");;

        }
        /*if scrolled about remove class*/
        if (who_p_position > screen_position) {

            who_p.classList.remove("slide_in_left");

        }

    }

}

function animate_who_we_are_questions() {

    if (document.getElementById("questions")) {

        let questions = document.getElementById("questions");
        let questions_position = questions.getBoundingClientRect().top;
        let screen_position = window.innerHeight;

        if (questions_position < screen_position) {

            questions.classList.add("fade_in");

        }

        /*in viewport scrolling up and not out of viewport*/
        if (questions_position > 0 && questions_position < screen_position) {

            questions.classList.add("fade_in");

        }
        /*if scrolled passed remove class*/
        if (questions_position < 0) {

            questions.classList.remove("fade_in");;

        }
        /*if scrolled about remove class*/
        if (questions_position > screen_position) {

            questions.classList.remove("fade_in");

        }

    }

}

//footer
function animate_footer_h3() {

    if (document.getElementById("header_three") && document.getElementById("header_three2")) {

        let header = document.getElementById("header_three");
        let header_two = document.getElementById("header_three2");
        let header_position = header.getBoundingClientRect().top;
        let screen_position = window.innerHeight;


        if (header_position < screen_position) {

            header.classList.add("slide_in_left");
            header_two.classList.add("slide_in_right");

        }

        /*in viewport scrolling up and not out of viewport*/
        if (header_position > 0 && header_position < screen_position) {

            header.classList.add("slide_in_left");
            header_two.classList.add("slide_in_right");
        }
        /*if scrolled passed remove class*/
        if (header_position < 0) {

            header.classList.remove("slide_in_left");
            header_two.classList.remove("slide_in_right");
        }
        /*if scrolled about remove class*/
        if (header_position > screen_position) {

            header.classList.remove("slide_in_left");
            header_two.classList.remove("slide_in_right");
        }

    }

}


function animate_footer_li() {

    let odd = document.getElementById("odd");
    let even = document.getElementById("even");
    let odd2 = document.getElementById("odd2");
    let even2 = document.getElementById("even2");
    let odd3 = document.getElementById("odd3");
    let ul_position = odd.getBoundingClientRect().top;
    let screen_position = window.innerHeight;



    if (ul_position < screen_position) {

        odd.classList.add("slide_in_left");
        even.classList.add("slide_in_right");
        odd2.classList.add("slide_in_left");
        even2.classList.add("slide_in_right");
        odd3.classList.add("slide_in_left");

    }


    /*in viewport scrolling up and not out of viewport*/
    if (ul_position > 0 && ul_position < screen_position) {

        odd.classList.add("slide_in_left");
        even.classList.add("slide_in_right");
        odd2.classList.add("slide_in_left");
        even2.classList.add("slide_in_right");
        odd3.classList.add("slide_in_left");
    }
    /*if scrolled passed remove class*/
    if (ul_position < 0) {

        odd.classList.remove("slide_in_left");
        even.classList.remove("slide_in_right");
        odd2.classList.remove("slide_in_left");
        even2.classList.remove("slide_in_right");
        odd3.classList.remove("slide_in_left");
    }
    /*if scrolled about remove class*/
    if (ul_position > screen_position) {

        odd.classList.remove("slide_in_left");
        even.classList.remove("slide_in_right");
        odd2.classList.remove("slide_in_left");
        even2.classList.remove("slide_in_right");
        odd3.classList.remove("slide_in_left");
    }


}


function animate_footer_button() {

    let footer_btn = document.getElementById("footer_btn");
    let btn_position = footer_btn.getBoundingClientRect().top;
    let screen_position = window.innerHeight;


    if (btn_position < screen_position) {

        footer_btn.classList.add("slide_in_left");

    }

    /*in viewport scrolling up and not out of viewport*/
    if (btn_position > 0 && btn_position < screen_position) {

        footer_btn.classList.add("slide_in_left");

    }
    /*if scrolled passed remove class*/
    if (btn_position < 0) {

        footer_btn.classList.remove("slide_in_left");;

    }
    /*if scrolled about remove class*/
    if (btn_position > screen_position) {

        footer_btn.classList.remove("slide_in_left");

    }

}
/*moile navigation*/
let nav_active = false;
let mobile_nav_logo = document.querySelector('.mobile_nav_logo');
let mobile_nav = document.querySelector('.mobile_nav');
/*open and close mobile nav when mobile nav logo is clicked*/
mobile_nav_logo.addEventListener('click',
    function () {
        mobile_nav.classList.toggle('mobile_nav_active');
        mobile_nav_logo.classList.toggle('mobile_logo_active');
        nav_active = !nav_active;
    }
);
//if  mobile nav is open and clicked outside of nav. close  mobile nav
let main = document.querySelector('main');
if (nav_active = true) {
    main.addEventListener('click', function () {
        mobile_nav.classList.remove('mobile_nav_active');
        mobile_nav_logo.classList.remove('mobile_logo_active');
        nav_active = !nav_active;
    })
}
