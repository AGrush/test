<?php
	if (isset($_POST["submit"])) {
		$name = $_POST['name'];
		$email = $_POST['email'];
		$message = $_POST['message'];
		$human = intval($_POST['human']);
		$from = 'agwebdesign@domain.com'; 
		$to = 'grushevskiy@gmail.com'; 
		$subject = 'Message from Contact Demo ';
		
		$body ="From: $name\n E-Mail: $email\n Message:\n $message";

		// Check if name has been entered
		if (!$_POST['name']) {
			$errName = 'Please enter your name';
		}
		
		// Check if email has been entered and is valid
		if (!$_POST['email'] || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
			$errEmail = 'Please enter a valid email address';
		}
		
		//Check if message has been entered
		if (!$_POST['message']) {
			$errMessage = 'Please enter your message';
		}
		//Check if simple anti-bot test is correct
		if ($human !== 2) {
			$errHuman = 'Your anti-spam is incorrect';
		}

// If there are no errors, send the email
if (!$errName && !$errEmail && !$errMessage && !$errHuman) {
	if (mail ($to, $subject, $body, $from)) {
		$result='<div class="alert alert-success">Thank You! I will be in touch</div>';
	} else {
		$result='<div class="alert alert-danger">Sorry there was an error sending your message. Please try again later.</div>';
	}
}
	}
?>


<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
	<title>AG Web Design</title>

	<link href="https://fonts.googleapis.com/css?family=Roboto|Roboto+Condensed|Ubuntu|Montserrat" rel="stylesheet">
	<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet">
	<link href="https://cdn.jsdelivr.net/npm/owl.carousel@2.3.4/dist/assets/owl.carousel.min.css" rel="stylesheet">
	<link href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css" rel="stylesheet">


	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
	<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js"> </script> -->
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
	<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.1.0/velocity.min.js"></script> -->

	<!-- <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
	<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.21.1/babel.min.js"></script> -->
	
	<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/98/three.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.7/p5.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/mobile-detect/1.4.3/mobile-detect.min.js"></script>
	<script src="//malihu.github.io/custom-scrollbar/jquery.mCustomScrollbar.concat.min.js"></script>
	<script src="OrbitControls.js"></script>


	<link href="main.css" rel="stylesheet">
	

			
</head>

<body>

	<div id="abcs" class="content4 toggle noselect">
		<div class="stuff noselect">
	
	
			<img class="insides" src="Book5.png" usemap="#planetmap">
			<map class="insides" name="planetmap">
				<area shape="rect" coords="100,240,320,340" alt="CV" href="AGResume.pdf">
				<area shape="rect" coords="50,340,320,440" alt="CV" href="AGPortfolio.pdf">
			</map>
	
	
		</div>
	</div>
	
	
	<div id="container-fluid" class="mr-0 pr-0">

		<canvas id="myCanvas"></canvas>
		<canvas id="stars"></canvas>
		<canvas id="agg"></canvas>

			






	<!-- <svg class="svgtest" viewbox="20 0 700 1100" preserveaspectratio="none"  version="1.1" xmlns="http://www.w3.org/2000/svg">
		<defs>
			<pattern id="imgpattern" x="0" y="0" width="100" height="6">
				<image width="793" height="496" xlink:href="http://gastv.mx/wp-content/uploads/2014/05/jumex.jpg" />
			</pattern>
		</defs>
		
		
		<rect fill="url(#imgpattern)" x="-221" y="162.7" transform="matrix(0.995 1.8004 -0.8004 0.995 402.7513 -7.0844)" class="st1" width="1000"
		 height="49.6" />
		<rect fill="url(#imgpattern)" x="-221" y="158.4" transform="matrix(0.995 1.8004 -0.8004 0.995 402.7513 -7.0844)" class="st2"
		 width="2000" height="58.6" />
	</svg> -->
	<div id="menuitem3" class="noselect">
		<!-- <div class="about1"> -->
			<a class="about1 11 noselect" data-val="content1" href="#" >About</a>
		<!-- </div> -->
			
		<!-- <div class="skill1"> -->
			<a class="about1 22 noselect" data-val="content2" href="#">Skills</a>
		<!-- </div> -->
		
		<!-- <div class="work1"> -->
			<a class="about1 33 noselect" data-val="content3" href="#">Work</a>
		<!-- </div> -->
		
		<!-- <div class="cv1"> -->
			<a class="about2 44 noselect hi" data-val="content4" href="#">CV</a>
		<!-- </div> -->
	</div>

	<div id="abcs0" class="content1 toggle">
		
		
		<p>I make websites/emails/ad banners and have worked accross a range of different projects over the last 8 years. I specialise in custom wordpress CMS sites designed bespoke on photoshop. Please enquire with as much detail as possible about your project and I will get back to you asap. I also like to produce music in my spare time, check out my <a href="https://soundcloud.com/mooncity1"
			 target="_blank">soundcloud</a>.
		</p><br>
		
	</div>
	
	<div id="abcs2" class="content2 toggle noselect">
		<div class="skillbar clearfix " data-percent="81%">
			<div class="skillbar-title" style="background: #CCAC5D;"><span>UI/UX</span></div>
			<div class="skillbar-bar" style="background: #CCAC5D;"></div>
			<div class="skill-bar-percent"></div>
		</div>
		<div class="skillbar clearfix " data-percent="83%">
			<div class="skillbar-title" style="background: #459a83;"><span>HTML5</span></div>
			<div class="skillbar-bar" style="background: #459a83;"></div>
			<div class="skill-bar-percent"></div>
		</div> <!-- End Skill Bar -->
		
		<div class="skillbar clearfix " data-percent="80%">
			<div class="skillbar-title" style="background: #CCAC5D;"><span>HTML-Email</span></div>
			<div class="skillbar-bar" style="background: #CCAC5D;"></div>
			<div class="skill-bar-percent"></div>
		</div> <!-- End Skill Bar -->
		
		<div class="skillbar clearfix " data-percent="80%">
			<div class="skillbar-title" style="background: #459a83;"><span>CSS3</span></div>
			<div class="skillbar-bar" style="background: #459a83;"></div>
			<div class="skill-bar-percent"></div>
		</div> <!-- End Skill Bar -->
		
		<div class="skillbar clearfix " data-percent="65%">
			<div class="skillbar-title" style="background: #CCAC5D;"><span>JS/Jquery</span></div>
			<div class="skillbar-bar" style="background: #CCAC5D;"></div>
			<div class="skill-bar-percent"></div>
		</div> <!-- End Skill Bar -->
		
		<div class="skillbar clearfix " data-percent="67%">
			<div class="skillbar-title" style="background: #459a83;"><span>Green Sock</span></div>
			<div class="skillbar-bar" style="background: #459a83;"></div>
			<div class="skill-bar-percent"></div>
		</div> <!-- End Skill Bar -->
		
		<div class="skillbar clearfix " data-percent="75%">
			<div class="skillbar-title" style="background: #CCAC5D;"><span>Bootstrap</span></div>
			<div class="skillbar-bar" style="background: #CCAC5D;"></div>
			<div class="skill-bar-percent"></div>
		</div> <!-- End Skill Bar -->
		
		<div class="skillbar clearfix " data-percent="75%">
			<div class="skillbar-title" style="background: #459a83;"><span>Wordpress</span></div>
			<div class="skillbar-bar" style="background: #459a83;"></div>
			<div class="skill-bar-percent"></div>
		</div> <!-- End Skill Bar -->
		
		<div class="skillbar clearfix " data-percent="87%">
			<div class="skillbar-title" style="background: #CCAC5D;"><span>SEO</span></div>
			<div class="skillbar-bar" style="background: #CCAC5D;"></div>
			<div class="skill-bar-percent"></div>
		</div> <!-- End Skill Bar -->
		
		<div class="skillbar clearfix " data-percent="80%">
			<div class="skillbar-title" style="background: #459a83;"><span>Adobe</span></div>
			<div class="skillbar-bar" style="background: #459a83;"></div>
			<div class="skill-bar-percent"></div>
		</div>
	</div>
	
	<div id="abcs3" class="content3 toggle noselect">
		<div class="owl-carousel noselect">
			<div class="item noselect">
	
				<img class="img1 noselect" src="img/Chainenable.png">
	
			</div>
			<div class="item noselect">
	
				<img class="img1 noselect" src="img/Nuuuuugs.png">
	
			</div>
			<div class="item noselect">
			
				<img class="img1 noselect" src="img/Tech.png">
			
			</div>
	
	
		</div>
		<div class="owl-carousel noselect">
			<div class="item noselect">
		
				<img class="img1 noselect" src="img/Tech.png">
		
			</div>
			<div class="item noselect">
		
				<img class="img1 noselect" src="img/Nuuuuugs.png">
		
			</div>
			<div class="item noselect">
			
				<img class="img1 noselect" src="img/Chainenable.png">
			
			</div>
		
		
		</div>
	</div>
	
	
	<div id="welcome">
		
		<div id="Menu " class="Menu">
			
			<div class="Menu-list noselect" data-offset="20">
				<div class="Menu-list-item noselect typewriter" data-offset="40" onclick>
					<p class="Mask noselect">AG</p>
					<h2 class="frontpage noselect">Hi, I'm Andrey Grushevskiy. I make web sites.</h2>
					<a class="btn-contactme noselect" href="#myModal" role="button" data-toggle="modal"><p class="poo">CONTACT ME</p></a>
				</div>
			</div>
		</div>
		
		
	</div>
	
	
	<div id="myModal" class="modal fade">
		<div class="modal-dialog modal-lg contact-modal">
			<div class="modal-content">
				
		
				<form id="contact-form" role="form" method="post" action="index.php">
					<div class="modal-header">
						<h4 class="modal-title noselect">Send me a message</h4>
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
					</div>
					<div class="modal-body">
						<div class="row">
							<div class="col-md-6">
								<div class="form-group">
											<input type="text" class="form-control" id="name" name="name" placeholder="First & Last Name" value="<?php echo htmlspecialchars($_POST['name']); ?>">
											<?php echo "<p class='text-danger'>$errName</p>";?>
								</div>
								<div class="form-group">
											<input type="email" class="form-control" id="email" name="email" placeholder="example@domain.com" value="<?php echo htmlspecialchars($_POST['email']); ?>">
											<?php echo "<p class='text-danger'>$errEmail</p>";?>
								</div>
								<div class="form-group">
											<label for="human" class="col-sm-12 control-label ml-0 pl-2">1 + 1 = ?</label>
											<div class="col-sm-10 ml-0 pl-0">
												<input type="text" class="form-control " id="human" name="human" placeholder="Your Answer">
												<?php echo "<p class='text-danger'>$errHuman</p>";?>
											</div>
								</div>
							</div>
							<div class="col-md-6">
								<div class="form-group">
											<textarea class="form-control" rows="4" name="message"><?php echo htmlspecialchars($_POST['message']);?></textarea>
											<?php echo "<p class='text-danger'>$errMessage</p>";?>
								</div>
							</div>
						</div>
					</div>
					<div class="form-group form-feedback">
						<div class="col-sm-10 col-sm-offset-2">
							<?php echo $result; ?>
						</div>
					</div>
					<div class="modal-footer">
						<input type="button" class="btn btn-link" data-dismiss="modal" value="Cancel">
						<input id="submit" name="submit" type="submit" value="Send"  class="btn btn-primary" value="Send">
					</div>
					
				</form>




			</div>
		</div>
	</div>
	<!-- End Modal HTML -->
    
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
<script src="main.js"></script>



</body>
</html>