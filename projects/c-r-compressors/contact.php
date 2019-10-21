	<?php require("shared/header.php")?>
	<div class="contact_hero_section"></div>
	<div class="blank_space wide_skinny"></div>
	<div class="blank_space"></div>
	<?php
	/*Set message based upon which button they clicked to get to this page*/
	$service = "";
	if(isset($_GET['service'])){
	  $service = $_GET['service'];
	}
		switch($service){
			case "eva":
				$service_msg = "for a FREE Evaluation!";
				break;

			case "area":
				$service_msg = "to see if your in our service area.";
				break;

			case "repair":
				$service_msg = "for compressor repairs.";
				break;

			case "question":
				$service_msg = "for answers to all your questions!";
				break;

			default:
				$service_msg = "for all your compressor needs!";
		}
	?>
	<section class="contact_call">
	    <h1>Contact us
	        <?php echo $service_msg; ?>
	    </h1>
	    <div class="contact_align">
	        <ul>
	            <li><a href="mailto:asdasdasdasdasd">Email: adsasdasdasdasd</a><br><br></li>

	            <li><a href="tel:1231231234">Phone: 123-123-1234</a></li>
	        </ul>
	    </div>
	</section>
	<section class="contact_form">
	    <h1>Contact us
	        <?php echo $service_msg; ?>
	    </h1>
	    <form action="contact.php" method="post">
	        <h5>Required field marked with *</h5>
	        <h3>
	            *What Services do you need?<br>
	            <?php if( !empty( $error_service ) ){ echo $error_service; } ?>
	        </h3>

	        <div class="contact_align">
	            <input type="checkbox" id="Evaluation" name="check_list[] " value="Evaluation">
	            <label for="Evaluation">Evaluation</label>
	            <br><br>
	            <input type="checkbox" id="Preventive_Maintance" name="check_list[]" value="Preventive Maintance">
	            <label for="Preventive_Maintance">preventive maintenance</label>
	            <br><br>
	            <input type="checkbox" id="Installs" name="check_list[]" value="Installs">
	            <label for="Installs">Installs</label>
	            <br><br>
	            <input type="checkbox" id="Rebuild" name="check_list[]" value="Rebuild">
	            <label for="Rebuild">Rebuild</label>
	            <br><br>
	            <input type="checkbox" id="Parts" name="check_list[]" value="Parts">
	            <label for="Parts">Parts</label>
	            <br><br>
	            <input type="checkbox" id="Service_Area" name="check_list[]" value="Service Area">
	            <label for="Service_Area">Service Area</label>
	            <br><br>
	            <input type="checkbox" id="Repair" name="check_list[]" value="Repair">
	            <label for="Evaluation">Repair</label>
	            <br><br>
	            <input type="checkbox" id="Q&A" name="check_list[]" value="Q&A">
	            <label for="Q&A">Questions and Contact</label>
	            <br>
	            <br>
	            <label for="Name">*Name: </label>
	            <input type="text" name="Name" id="Name" required>
	            <br><br>
	            <label for="Email">*Email: </label>
	            <input type="Email" name="Email" id="Email" required>
	            <br><br>
	            <label for="Phone">*Phone: </label>
	            <input type="tel" name="Phone" id="Phone" required>
	            <br><br>
	            <label for="msg">Enter additional information here!</label>
	            <br><br>
	            <input type="text" name ="msg" id="msg">
	            <br><br>
	            <input type="submit" name="submit" value="Contact Us">
	            <br><br>
	        </div>
	    </form>
	</section>
	<?php
	/*Subject of email based upon the services they chose*/
	$subject="R&C Request For ";
	if( isset( $_POST['submit'] ) ){
		if( !empty( $_POST['check_list'] ) ){
			foreach( $_POST['check_list'] as $service ){
				$subject = $subject . ", " . htmlspecialchars($service);
			}
			unset( $_POST['submit'] );
			unset( $_POST['check_list'] );
			/*compose mail*/
            /*$to is mail server proviveded by mail hosting*/
			$to = "maindserver@00webhost.com";
  		    $msg = "Name: " . htmlspecialchars($_POST['Name']) . "\n\r".
				"Email: " . htmlspecialchars($_POST['Email']) . "\n\r".
				"Phone: " . htmlspecialchars($_POST['Phone']) . "\n\r".
				"\n\r".
				$_POST['msg'];

            ini_set('SMTP','xo7.x10hosting.com');
            ini_set('smtp_port',465);

			mail( $to, $subject, $msg );
            echo "sent mail";
		}else{
			/*Service not selected*/
			$error_service = "Please choose a service!";
		}
	}
	?>
	<?php include("shared/footer.php")?>
