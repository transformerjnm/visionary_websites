//on load
window.addEventListener('load', function () {
	/*page transition*/
	let body = document.querySelector('body');
	body.classList.add('page_transition');
	//---------title animation----------
	if (document.getElementById("title")) {
		var title = document.getElementById("title");
		title.classList.add("fade_in2"); //title animation
	}
});

// ------ add playback time to smoke video ------
if (document.getElementById("video")) {
	let video = document.getElementById("video");
	video.playbackRate = 0.5; //changes the rate the video plays
}

//------scroll animations-------
window.addEventListener('scroll', throttle(anmiations, 100));

//functions
function anmiations() {
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
}
//check element position
function check_element_position(element, element_position, animation) {

	let screen_position = window.innerHeight; //gets the height of the window

	/*scrolled into viewport and has not scrolled out of viewport add class*/
	if (element_position < screen_position && element_position > 0) {
		element.classList.add(animation);
	}
	/*in viewport scrolling up and not out of viewport*/
	if (element_position > 0 && element_position < screen_position) {
		element.classList.add(animation);
	}
	/*if scrolled passed remove class*/
	if (element_position < 0) {
		element.classList.remove(animation);
	}
	/*if scrolled about remove class*/
	if (element_position > screen_position) {
		element.classList.remove(animation);
	}

}

function check_2element_position(element1, element2, element_position, animation1, animation2) {

	let screen_position = window.innerHeight; //gets the height of the window

	if (element_position < screen_position) {

		element1.classList.add(animation1);
		element2.classList.add(animation2);
	}


	/*in viewport scrolling up and not out of viewport*/
	if (element_position > 0 && element_position < screen_position) {
		element1.classList.add(animation1);
		element2.classList.add(animation2);
	}
	/*if scrolled passed remove class*/
	if (element_position < 0) {
		element1.classList.remove(animation1);
		element2.classList.remove(animation2);
	}
	/*if scrolled about remove class*/
	if (element_position > screen_position) {
		element1.classList.remove(animation1);
		element2.classList.remove(animation2);
	}

}

function check_multiple_elements(odd, even, odd2, even2, odd3, element_position, animation1, animation2) {

	let screen_position = window.innerHeight;



	if (element_position < screen_position) {

		odd.classList.add(animation1);
		even.classList.add(animation2);
		odd2.classList.add(animation1);
		even2.classList.add(animation2);
		odd3.classList.add(animation1);

	}


	/*in viewport scrolling up and not out of viewport*/
	if (element_position > 0 && element_position < screen_position) {

		odd.classList.add(animation1);
		even.classList.add(animation2);
		odd2.classList.add(animation1);
		even2.classList.add(animation2);
		odd3.classList.add(animation1);
	}
	/*if scrolled passed remove class*/
	if (element_position < 0) {

		odd.classList.remove(animation1);
		even.classList.remove(animation2);
		odd2.classList.remove(animation1);
		even2.classList.remove(animation2);
		odd3.classList.remove(animation1);
	}
	/*if scrolled about remove class*/
	if (element_position > screen_position) {

		odd.classList.remove(animation1);
		even.classList.remove(animation2);
		odd2.classList.remove(animation1);
		even2.classList.remove(animation2);
		odd3.classList.remove(animation1);
	}


}

//services area h3
function animate_contact_services_area_h3() {

	//h3 in contact services area
	if (document.getElementById("header_3")) {

		let area_title = document.getElementById("header_3"); //selects the h3 tag
		let area_position = area_title.getBoundingClientRect().top; //gets the top position of h3

		check_element_position(area_title, area_position, "slide_in_right");


	}


}
//services area paragraph
function animate_contact_services_area_p() {


	if (document.getElementById("paragraph")) {

		let area_paragraph = document.getElementById("paragraph"); //selects the paragrpah
		let area_paragraph_position = area_paragraph.getBoundingClientRect().top; //gets top position


		check_element_position(area_paragraph, area_paragraph_position, "slide_in_left");

	}

}

//services area title and button
function animate_contact_services_area_contact() {

	if (document.getElementById("contact_area")) {


		let contact_area_div = document.getElementById("contact_area"); //selects the area
		let contact_area_position = contact_area_div.getBoundingClientRect().top; //top position


		check_element_position(contact_area_div, contact_area_position, "fade_in");


	}

}

//i need repair and 24/7 repair
function animate_repair() {

	if (document.getElementById("i_need_repair") && document.getElementById("emergancy")) {

		let repair = document.getElementById("i_need_repair"); //selects title and button
		let repair_emergancy = document.getElementById("emergancy");
		let repair_position = repair.getBoundingClientRect().top; //top position of repair



		check_2element_position(repair, repair_emergancy, repair_position, "fade_in", "pop_in");

	}

}

//who we are
function animate_who_we_are_h3() {

	if (document.getElementById("who_header")) {

		let who_header = document.getElementById("who_header");
		let who_header_position = who_header.getBoundingClientRect().top;

		check_element_position(who_header, who_header_position, "slide_in_right");

	}


}

function animate_who_we_are_p() {

	if (document.getElementById("who_p")) {

		let who_p = document.getElementById("who_p");
		let who_p_position = who_p.getBoundingClientRect().top;

		check_element_position(who_p, who_p_position, "slide_in_left");

	}

}

function animate_who_we_are_questions() {

	if (document.getElementById("questions")) {

		let questions = document.getElementById("questions");
		let questions_position = questions.getBoundingClientRect().top;

		check_element_position(questions, questions_position, "fade_in");

	}

}

//footer
function animate_footer_h3() {

	if (document.getElementById("header_three") && document.getElementById("header_three2")) {

		let header = document.getElementById("header_three");
		let header_two = document.getElementById("header_three2");
		let header_position = header.getBoundingClientRect().top;

		check_2element_position(header, header_two, header_position, "slide_in_left", "slide_in_right");

	}

}


function animate_footer_li() {

	let odd = document.getElementById("odd");
	let even = document.getElementById("even");
	let odd2 = document.getElementById("odd2");
	let even2 = document.getElementById("even2");
	let odd3 = document.getElementById("odd3");
	let ul_position = odd.getBoundingClientRect().top;

	check_multiple_elements(odd, even, odd2, even2, odd3, ul_position, "slide_in_left", "slide_in_right");


}

function animate_footer_button() {

	let footer_btn = document.getElementById("footer_btn");
	let btn_position = footer_btn.getBoundingClientRect().top;

	check_element_position(footer_btn, btn_position, "fade_in");

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
	main.addEventListener('click',
		function () {
			mobile_nav.classList.remove('mobile_nav_active');
			mobile_nav_logo.classList.remove('mobile_logo_active');
			nav_active = !nav_active;
		}
	);
}
/*Services active option*/
let maintnace_description = "Avoid costly catastrophic breakdowns with preventive maintenance. We will carefully maintain each part to ensure that the reliability of your system is at its peak. Contact us to get the maximum reliability out of your system.";

let install_decritption = "Get a state of the art air compressor system installed professionally. By choosing us we ensure that your system is installed correctly to increase reliability, minimize wear, and run efficiently. Start out on the right foot today and contact us about your air compressor install!";

let rebuild_description = "Got an old air compressor system that needs refurbishing? We can bring life back to your old compressor with a comprehensive rebuild. Save money by not having to replace your entire system. Contact us to restore your system back to its original capability.";

let parts_description = "Need parts to fix your own compressor? Look no farther, we can get you the parts you need! Talk to our professional mechanic to find the perfect part for your compressor. Contact us today for pricing and availability.";

let evaluation_description = "A detailed analysis of all your system components. We will find current problems and look for signs of extensive wear on components. Then we will make an effective plan to fix your system and a plan for preventive maintenance.";

let current_description = evaluation_description;

let service_options = document.querySelectorAll('.services_option');
let service_section = document.querySelector('.services');

service_section.addEventListener('click', check_if_service_clicked); //on click check which element was clicked

window.addEventListener('load', check_if_service_clicked); //on load, load clicked element

/*each element check if its been clicked*/
function check_if_service_clicked() {

        //for each services
	service_options.forEach(function(service){


		service.addEventListener('click', function () {

            let service_id = service.getAttribute('id'); //gets id of current element
            let service_description = document.getElementById('service_description');

            switch(service_id){

                case "services_evalution": current_description = evaluation_description;
                    break;
                case "services_maintance": current_description = maintnace_description;
                    break;
                case "services_installs": current_description = install_decritption;
                    break;
                case "services_rebuilds": current_description = rebuild_description;
                    break;
                case "services_parts": current_description = parts_description;
                    break;

            }


			//if clicked remove class active from old active element
			service_options.forEach(function (service_remove) {
				if (service_remove.classList.contains('service_active')) {
					service_remove.classList.remove('service_active');
				}
                if(service_description.classList.contains('slide_in_right')){
                    service_description.classList.remove('slide_in_right');
                    void service_description.offsetWidth; //triggers reflow to make animation work
                }
			});
			service.classList.add('service_active');
            service_description.classList.add('slide_in_right');




		});

        service_description.innerHTML = current_description; //changes description to the current active service option
	});
}
//resuable function to throttle the number of times a fuction is called
function throttle(fn, wait) {
	var time = Date.now();
	return function () {
		if ((time + wait - Date.now()) < 0) {
			fn();
			time = Date.now();
		}
	}
}
