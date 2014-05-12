function shuffle(array) {
    var i = array.length,
        j = 0,
        temp;
    while (i--) {
        j = Math.floor(Math.random() * (i+1));
        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

var ranNums = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);


$(document).ready(function(){
	/* button stuff */
	$("#newfact").hover(function(){
		$(this).css("background-color","#666666");
			},function(){
		$(this).css("background-color","black");
		});
	$("#newfact").click(function() {
	var q = ranNums.pop();
	switch (q) {
		case 1:
			$("p").empty();
			$("p").append("On December 12, 2013, fifteen civilians on their way to a wedding reception in Yemen were killed when an American airstrike missed its target and <a href='http://www.theguardian.com/world/2013/dec/12/air-strike-yemen-15-wedding-guest-killed-mistaken-al-qaida' target='_blank'>hit the wedding convoy</a>.");
			break;
		case 2:
			$("p").empty();
			$("p").append("On May 23, 2012, at least ten people, mostly civilians, were killed in northwest Pakistan when a US drone strike <a href='http://worldnews.nbcnews.com/_news/2012/05/23/11839215-pakistan-official-us-drone-strike-hits-mosque-10-killed?lite' target='_blank'>hit a village mosque</a>.");
			break;
		case 3:
			$("p").empty();
			$("p").append("A recent study by researchers from Princeton and Northwestern Universities has found that the American political system today much more closely resembles an <a href='https://www.princeton.edu/~mgilens/Gilens%20homepage%20materials/Gilens%20and%20Page/Gilens%20and%20Page%202014-Testing%20Theories%203-7-14.pdf' target='_blank'>oligarchy</a> than any form of <a href='http://www.policymic.com/articles/87719/princeton-concludes-what-kind-of-government-america-really-has-and-it-s-not-a-democracy' target='_blank'>democracy</a>.");
			break;
		case 4:
			$("p").empty();
			$("p").append("62% of bankruptcies in the United States are <a href='http://edition.cnn.com/2009/HEALTH/06/05/bankruptcy.medical.bills/index.html?_s=PM:HEALTH' target='_blank'>related to medical bills</a>.");
			break;
		case 5:
			$("p").empty();
			$("p").append("The United States spends <a href='http://time.com/198/bitter-pill-why-medical-bills-are-killing-us/' target='_blank'>more on healthcare</a> than Japan, Germany, France, China, the U.K., Italy, Canada, Brazil, Spain and Australia combined; if the U.S. healthcare system were a country, it would have the <a href='http://www.businessinsider.com/depressing-facts-about-healthcare-system-2011-6#if-our-health-care-system-were-its-own-country-it-would-be-the-sixth-largest-economy-in-the-world-29' target='_blank'>sixth largest econonmy</a> on the planet.");
			break;
		case 6:
			$("p").empty();
			$("p").append("The U.S. ambulance industry makes <a href='http://time.com/198/bitter-pill-why-medical-bills-are-killing-us/' target='_blank'>more money each year</a> than the film industry.");
			break;
		case 7:
			$("p").empty();
			$("p").append("Children in America are approximately <a href='http://www.sciencedaily.com/releases/2008/09/080924192437.htm' target='_blank'>three times more likely</a> to be prescribed psychotropic medication, and roughly two times as likely to be prescribed antipsychotic medication, than children in Europe.");
			break;
		case 8:
			$("p").empty();
			$("p").append("15 of the 25 <a href='http://www.washingtonpost.com/blogs/wonkblog/wp/2012/12/14/nine-facts-about-guns-and-mass-shootings-in-the-united-states/' target='_blank'>worst mass shootings worldwide</a> in the last 50 years took place in the United States.  In second place is Finland, with two.");
			break;
		case 9:
			$("p").empty();
			$("p").append("Mass killings, defined by the FBI as murders with four or more victims, not including the killer, have occurred across the U.S. at a rate of about <a href='http://www.usatoday.com/story/news/nation/2013/09/16/mass-killings-data-map/2820423/' target='_blank'>one every two weeks</a> since 2006.");
			break;
		case 10:
			$("p").empty();
			$("p").append("In January 2013, a <a href='http://www.gallup.com/poll/160085/americans-back-obama-proposals-address-gun-violence.aspx' target='_blank'>Gallup poll</a> showed that of the key proposals included in President Barack Obama's plan to reduce gun violence, 91% of Americans would personally vote to require criminal background checks for all gun sales, and 60% would vote to reinstate and strengthen the assault weapons ban of 1994-2004.  Both of these proposals have been <a href='http://thehill.com/homenews/senate/294571-senate-rejects-tougher-background-checks-on-gun-purchases' target='_blank'>defeated</a> in <a href='http://www.huffingtonpost.com/2013/04/17/assault-weapons-ban_n_3103120.html' target='_blank'>Congress</a>.");
			break;
		case 11:
			$("p").empty();
			$("p").append("Black people make up roughly 13% of the United States population and 14% of its drug users, yet they represent over 55% of those <a href='http://www.thehouseilivein.org/files/THE%20HOUSE%20I%20LIVE%20IN%20FinalPressNotes10.08.12.pdf' target='_blank'>incarcerated for drug crimes</a> in the U.S.");
			break;
		case 12:
			$("p").empty();
			$("p").append("In 2002, black people constituted more than <a href='http://www.naacp.org/pages/criminal-justice-fact-sheet' target='_blank'>80% of the people sentenced</a> under federal crack cocaine laws and served substantially more time in prison for drug offenses than did white people, despite that fact that more than two-thirds of crack cocaine users in the U.S. are white or Hispanic.");
			break;
		case 13:
			$("p").empty();
			$("p").append("At the end of 2010, the United States contained roughly 4.5% of the world's population and 22.7% of the world's <a href='http://www.idcr.org.uk/wp-content/uploads/2010/09/WPPL-9-22.pdf' target='_blank'>prison and jail</a> population.");
			break;
		case 14:
			$("p").empty();
			$("p").append("In 2013, black people, who make up 13% of the U.S. population, constituted <a href='http://www.cbsnews.com/news/us-prison-population-falls-for-third-year/' target='_blank'>38% of the state prison population</a>.");
			break;
		case 15:
			$("p").empty();
			$("p").append("In New York City in 2011, the number of instances in which a black man aged 14-24 was stopped by police <a href='http://blogs.wsj.com/metropolis/2012/05/09/report-finds-stop-and-frisk-focused-on-black-youth/' target='_blank'>exceeded the population</a> of black men in that age range in the city: 168,126 stops, 158,406 black men in that age range.");
			break;
		case 16:
			$("p").empty();
			$("p").append("In 2013, the CCA and Geo Group, the two largest private prison corporations in America, spent over <a href='http://www.huffingtonpost.com/laura-carlsen/immigration-reform-privation-prisons-lobby_b_2665199.html' target='_blank'>$1.6 million lobbying congress</a>.  Much of this money went toward preserving laws that mandate prison time for immigration violations; these laws channel over $1 billion per year in federal funds to privately run detention centers.");
			break;
		case 17:
			$("p").empty();
			$("p").append("A 2007 study conducted by researchers at Northwestern University found that of 10,149 complaints of police abuse filed by citizens against Chicago Police Department officers between 2002 and 2004, <a href='http://webcache.googleusercontent.com/search?q=cache:7Kq_25Sp1SEJ:news.medill.northwestern.edu/chicago/news.aspx%3Fid%3D6125+&cd=1&hl=en&ct=clnk&gl=us' target='_blank'>19 resulted in 'meaningful discipline,'</a> defined as a suspension of seven days or more.  Of the 'repeaters'--officers who received more than 10 abuse complaints between 2001 and 2006--over 75% were never disciplined.");
			break;
		case 18:
			$("p").empty();
			$("p").append("As of 2013, the richest 1% of the U.S. population owned roughly <a href='http://gabriel-zucman.eu/files/SaezZucman2014Slides.pdf' target='_blank'>38% of the country's total wealth</a>, with the 400 richest Americans (0.000126% of the population) owning roughly 3% of the total wealth.  As of 2011, the poorest 40% of the population <a href='http://www.people.hbs.edu/mnorton/norton%20ariely%20in%20press.pdf' target='_blank'>owned 0.3%</a> of the country's total wealth.")
			break;
		case 19:
			$("p").empty();
			$("p").append("In 2007, the average (median) white American's net worth was <a href='http://www.businessinsider.com/charts-on-us-inequality-2013-11?op=1' target='_blank'>15 times</a> that of the average black American.");
			break;
		case 20:
			$("p").empty();
			$("p").append("As of July 2012, 17% of registered U.S. voters polled <a href='http://www.huffingtonpost.com/2012/07/26/obama-muslim_n_1706522.html' target='_blank'>still believed</a> that Barack Obama was a Muslim.  President Obama is a Christian.");
			break;
		default:
			$("p").empty();
			$("#source").empty();
			$("p").append("That's all for now.");
			break;
	};
	});
});
