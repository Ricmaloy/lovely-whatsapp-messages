async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`
Scripts.com

How the Grinch Stole
Christmas
By Jeffrey Price

Page 1/26

Narrator:
happened a story you must see to believe. Way up in the mountains, in the
high range of Pontoos lay the small town of Whoville: The home of the Whos.
Ask any Who, And they'll have this to say: "There is no place like Whoville
around Christmas Day."
Every window was flocked, every lamppost was dressed and the Whoville band
marched in their Christmasy best.
Merry Christmas! Merry Christmas!
Arbor Day was fine, and Easter was pleasant and every Saint Fizzin's day,
they ate a Fizz pheasant.
But every Who knew, from their twelve toes to their snout they loved
Christmas the most, without a single Who doubt.
Farfingle's welcomes you!
Thank you.
Merry Christmas! Thank you for shopping Farfingle's!
Father:
snoozlephone for your brother Stu, a muncle for your uncle a fant for your
aunt and a fandpa for your cousin Leon.
So, we just need.... Cindy?
Sale on Aisle 3!
Cindy Lou!
Merry Christmas.
Hello, Myrna. Merry Christmas, Fred. Excuse me.
Cindy Lou? Honey?
Cindy:
Father:
Cindy:
Father:
Cindy:
Merry Christmas!
Thank you for shopping Farfingle's. Wait a second! Your change!
Another minute closer to Christmas!
And, for the next five minutes only, 99 percent off!
Narrator:
the Grinch, who lived just north of Whoville- did not.
Get on it, girls. All the good mistletoe's at the top.

Page 2/26

Hey, Drew, I'll race you!
Not if I race you first.
Last one to the top is a stinky old Grinch!
You guys, where are we? I think we should go back.
What? You're scared of the Grinch!
No!
They say he lives up here in a big cave. And only comes down when he's
hungry for the taste of Who flesh!
Drew!
You're scared of the Grinch! You're scared of the Grinch!
Are too!
Am not!
Wait for me!
Go on, touch it. Touch the door.
Do it for me, Stu.
Well done, Max!
Serves them right, those Yuletide-loving sickly-sweet, nog-sucking cheer
mongers!
I really don't like them.
No, I don't.
Max!
Get my cloak!
I've been much too tolerant of these Whovenile delinquents and their
innocent, victimless pranks.
So, they want to get to know me, do they?
They want to spend a little quality time with the Grinch.
I guess I could use a little social interaction.
Merry Christmas!
Yeah, you bet.
Ho, ho, ho, and stuff.
Oh, my.
Someone has vandalized that vehicle.
You see, Max? The city is a dangerous place.
Narrator:
Top of the day. Flatfoot.
Narrator:
Here's a present for you.
Be sure to run real fast with it. Come on. Double time. Move.
Narrator:
it could be, perhaps, That his shoes were too tight.
But I think that the most likely reason of all, May have been that his

Page 3/26

heart Was two sizes too small.
Stranger, won't let you go till you buy a chapeau!
Father:
Cindy Lou:
Father:
Dad! Dad!
What happened to you?
It was the Grinch!
The Grinch?!
What do you want? I mean....
"Grinch? Oh, no!"
Mayor:
Father:
Lou.
Mayor:
one thousandth Whobilation, Whoville's most important celebration!
And the Book of Who ( pulling out a large book) says very clearly "Every
size of Who we can measure knows that Whobilation is a time we must
treasure!"
Now, Lou, please tell me that your boys were not up on Mount Crumpit
provoking the one creature within a billion bilometers of here who hates
Christmas!
But it was the Grinch!
No, sir, the boys didn't see any Grinch.
It was, and he came after...
I think they were up on the mountain playing with matches, or defacing
public property, or....
That's a relief.
All right, you heard the man: There is no Grinch problem here.
I need it there by tomorrow.
Heck of a rush.
Merry Christmas, Mo. Heck of a rush.
But, Dad I just don't understand something.
Why won't anyone talk about the Grinch?
You kids and the Grinch!
You see, Cindy, the Grinch is a Who, who always....
Actually, not a Who. He's more of a....

Page 4/26

A what?
Exactly, honey.
And he's a What who doesn't like Christmas.
Take a look at his mailbox, sweetie.
Not a single Christmas card, in or out.
Ever!
But why?
Lou, where's my mail?
Lou! Got the wrong mail here.
Lou! I got the wrong mail!
I'll be right there.
Lou, we got a problem!
All right, we'll straighten this out.
It'll take them years to sort this out.
This is his and now it's yours, and this hers and now it's his!
And for the rest of you: Jury duty! Jury duty! Jury duty!
Blackmail. Pink slip. Chain letter. Eviction notice.
Jury duty!
Would you mind helping me take this to the back room, honey?
Be careful of the sorting machine, right?
Yeah.
Gesundheit.
You're the....
The....
The Grinch!
That worked out nicely.
Help!
Help me! Somebody!
Max, let's go.
Our work here is finished.
Help me!
Please help!
That is not a chew toy!
Stop it, Max!
Get that out of your mouth! You have no idea where it's been!
Help!
Bleeding hearts of the world, unite!
There! Give me that!
Don't you know you shouldn't take things that don't belong to you?
What's the matter with you, some kind of a wild animal? Huh?!
Let's go.
Thanks for saving me.
Saving you?
Is that what you think I was doing?

Page 5/26

Wrong-o.
I merely noticed that you were improperly packaged, my dear.
Hold still!
Max, pick out a bow.
Can I use your finger for a second?
Hello! Hello!
Cindy?
Dad!
Daddy!
Daddy!
What the hey...?
Honey.
Cindy?
Dad! It was amazing!
You've been practicing your Christmas wrapping!
I am so proud of you.
Now, that's holiday.
Sweet little Cindy didn't know what to do.
In her head, bum-tumbled a conflict or two.
"If the Grinch was so bad,then why did he save me?
"Maybe he wasn't so bad."
Maybe. Just maybe.
No lights on in the house. Your mom must be shopping.
Good, I'm so glad you're home.
I can feel it, Lou. This is the year.
When everybody asks who has the most spectacular lights in greater Whoville
they're gonna cry out, "Mrs. Betty Lou Who!"
Isn't this the chandelier from the dining room?
It's all for the cause, dear.
And Cindy? Could you be Mommy's little helper and unscrew the bulb there
from the refrigerator?
'Cause somehow I missed that one.
Go on!
Every year Martha May Whovier has the best lights.
Not this year.
This year I'm gonna beat that prim, perfect little prissy...
Betty!
Hi!
Martha!
My, I've never seen so many beautiful Christmas lights, Betty Lou!
I'd blow every fuse if I tried to keep up with you, Martha May!
Isn't this antique darling?
It's handcrafted and almost 100 years old.
Jeez. I'm really impressed!

Page 6/26

This, however, is new.
Betty! Sweetie!
Good night, Betty.
I got it!
Honey, I've got it.
Hello?
Is my sub-zero chillibrator running?
I suppose.
You better go catch it!
That's a good one! That is rich.
Let's go home.
Fleas before beauty. Thank you.
Come on, hurry up, Slowpoke.
There's got to be a better way!
A car would have paid for itself by now!
Goody. Another load coming down.
What's that stench?
It's fantastic!
Max! Grab a bag.
We'll come back for the rest.
Of course, when I say "we, " I mean "you."
It's amazing what these Whos just throw away.
Oh, well.
One man's toxic sludge is another man's potpourri.
I don't know. It's some kind of soap.
"Where are you, Christmas? "Why can't I find you? "Why have you gone away?
"My world is changing "I'm rearranging "Does that mean Christmas "changes
too? "Where are you, Christmas? "Do you remember "The girl you used to
know? "You and I were so carefree "Now nothing's easy "Did Christmas change
"Or just "me?"
Sweet!
"Be it ever so "Heinous "There's no place like home"
First floor, factory rejects.
Those Whos are hard to frazzle, Max!
But we did our worst. And that's all that matters.
At least I scared the bejeebles out of that little girl at the post office.
She'll be scarred for life, if we're lucky.
Funny she didn't rat on us, though.
Must be afraid of reprisals.
Yes!
Down a size and a half!
And this time, I'll keep it off.
Get the stick, Max. Get the stick!
There's no stick!

Page 7/26

I'm smarter.
Any calls?
You have no messages.
Odd. Better check the outgoing.
If you utter so much as one syllable I'll hunt you down and gut you like a
fish!
If you'd like to fax me, press the star key.
Oh, well.
That's more like it.
Excellent year.
I'll tell you, Max I don't know why I ever leave this place.
I've got all the company I need right here.
Hello!
Hello!
How are you?
How are you?
I asked you first!
I asked you first!
That's really mature, saying exactly what I say!
Mature...exactly...what I say....
I'm an idiot!
You're an idiot!
All right, fine.
I'm not talking to you anymore. In fact, I'm going to whisper.
So that by the time my voice reverberates off the walls and gets back to me
I won't be able to hear it!
You're an idiot!
Am I just eating because I'm bored?
Who could that be?
Hello, little girl. Are you here to read to us?
No.
I hear you know some things about the Grinch.
Cindy Lou had some questions in her curious heart.
Why did the Grinch hate Christmas? Where did it all start?
With her dad's blabbacorder she wouldn't give an inch.
In your own words, please tell me everything you know about the Grinch.
Where did he come from?
He came the way all Who babies come.
On calm nights baby Who girls and tiny Who fellas drift from the sky in
their own pumbersellas.
Hey, honey, our baby is here!
He looks just like your boss.
So that's how it works.
It was Christmas Eve, and a strange wind blew that night.

Page 8/26

We were having our annual holiday get-together.
It was morning before anybody realized that he was out there!
The poor dear!
But, you know what?
We knew right away that he was special.
Do you want a Christmas cookie?
Yes, which Christmas cookie would you like?
Santa.
His first words!
Yes, that is a Santa plate.
Do you want to hold this Santa plate?
Santa, bye-bye!
He was a wonderful whatever he was.
And we raised him like any other Who child: With a deep love of Christmas.
Don't forget, tomorrow is our big Christmas gift exchange.
Everyone bring a special gift for a special someone.
The Grinch....
He had no sense of color coordination.
Although I hardly remember him. I didn't have time to socialize.
I was far too busy with my studies.
Now, class, is everyone almost finished?
And if the truth be told, he....
He liked Martha.
Martha was my girlfriend.
I don't like discussing this Grinch so very close to Christmas, but maybe
if you hear the truth, you'll understand why...
Put your back into it!
I tried to take him under my wing.
You don't have a chance with her. You're 8 years old and you have a beard!
He had hair. Not pleasant.
He shed.
Not right.
You know, Christmas is my favorite time of year.
I just love the colors.
The red and the green.
Did I have a crush on the Grinch?
Of course not.
I didn't ask you that.
Right.
For some reason, when he came home that day he really got into the
Christmas spirit for the first time.
Perfect!
Whoopsie!
What a lovely family heirloom!

Page 9/26

The fires of love!
This will be perfect on the top of her tree.
Oh, Martha! Oh, Christmas!
I want you all to look your best tomorrow.
You don't have a chance with her.
You're 8 years old and you have a beard!
Has everyone given their gifts?
I haven't.
What?
Merry Christmas, Martha May.
Why do you have a bag on your head?
Probably because he's embarrassed by that hideodorous gift.
Mr. Grinch please take the bag off.
Yes, you.
Take it off.
Put the book down.
And your foot.
Look at that hack job!
Stupid present!
Stupid tree!
I hate Christmas!
The anger.
The fury!
The muscles!
It was a horrible day when they were so cruel to him.
And I could hardly bear it.
I hate Christmas! I hate it!
And that was the last time we ever saw him.
The very last time.
Narrator:
outside his cave, Hating the Whos.
Alphabetically.
Aardvarkian Abakenezer Who.
l... HATE YOU!!!!
Aaron B. Benson Who, I hate you.
Hate, hate, hate. Hate, hate, hate.
Double hate.
Loathe entirely!
Grinch:
Narrator:
It's practically here!

Page 10/26

Grinch:
Now to take care of those pesky memories.
"Whobilation, plentiful with candy canes and pies "I can't wait to get
there to eat some google fries "Whobilation, Whobilation"
Dad?
Yeah.
I've been thinking about the Whobilation and I may do something drastic.
That's fine, dear. Ask your mother.
Where did she go?
Honey!
Honey! Hi!
Look, I just found the cutest light for my Christmas display.
Hurry up, we're gonna be late. Come on.
And now, the nominations for that Who among us who best typifies the
qualities of Whodom and Whodery the Whoville holiday cheer-meister!
Do I hear a nomination?
I nominate the Grinch!
Huh?!
The Grinch?
The Grinch?
My, my, my.
What an altruistic daughter you have there, Lou!
Thank you.
Cindy?
Let me quote a verse from The Book of Who.
Thank you.
"The term 'Grinchy' shall apply when Christmas spirit is in short supply."
Now, I ask you:
True, Mr. May-Who. But The Book of Who says this too:
"No matter how different a Who may appear... "...he will always be welcomed
with holiday cheer."
Yes, the book also says, the....
"The award "cannot go to the Grinch, because "sometimes things get the
lead-pipe cinch."
You made that up! It doesn't say that.
No, it does.
What page?
Lost my place, but it's....
It's in here!
But the book does say:
"The cheer-meister is the one who deserves a back slap or a toast. "And it
goes to the soul at Christmas who needs it most."

Page 11/26

And I believe that soul is the Grinch.
And if you're the Whos I hope you are, you will too.
She's right!
Fine.
You people want to waste a perfectly good nomination why, it's up to you.
But I am telling you the Grinch will never come down.
And when he doesn't, the Mayor will wear the crown.
Well, more or less.
"Deck your heart with jollity "Style your smile all Christmasy "Flick some
flocking on the tree "Let there be Whobilation "Bake the fruitcake, egg the
nog "Feed the flaming Wholtide log "Baste the beast and gulp the grog "Let
there be Whobilation "Tick, tock, tick, tock "Counting down the Christmas
clock "Old, young, big, small"
Blast this Christmas music.
It's joyful and triumphant.
Must drown them out!
Not working!
The whipper-winds whipped high above the Who town.
A trip or a slip you'd slide all the way down.
But this girl had a mission. She knew what to do.
She'd invite the Grinch herself, that brave Cindy Lou.
Play, monkey! Play!
Howdy?
Mr. Grinch?
Mr. Grinch!
Hello?
Excuse me.
Hello little girl.
How dare you enter the Grinch's lair?
The impudence! The audacity!
The unmitigated gall!
You called down the thunder now, get ready for the boom!
Gaze into the face of fear!
Mr. Grinch my name is Cindy Lou Who.
You see?
Even now the terror is welling up inside you.
I'm not scared.
Denial is to be expected in the face of pure evil.
I don't think so.
Doubt?
Another unmistakable sign of the heebie-jeebies!
Now you're doomed!
Run for your life before I kill again!
I'm a psycho!

Page 12/26

Danger! Danger!
Maybe you need a time-out.
Kids today.
So desensitized by movies and television.
What do you want?!
Mr. Grinch, I came to invite you to be holiday cheer-meister.
"Holiday Whobie-what-y"?
Cheer-meister.
"Cheer-meister. Celebrate with friends."
That's a good one.
Cindy Lou:
all just a misunderstanding?
Grinch:
Cindy Lou:
[The Grinch pretends to snore]
Cindy Lou:
Christmas...
Grinch:
the Whos and be a part of Christmas." [normal voice] Grow up!
Cindy Lou:
Grinch:
appointment with the receptionist on the way out.
Please, please. You have to accept the award.
Award?
You never mentioned an award!
Yeah, with a trophy and everything.
And I won?
You won!
That means there were losers.
I guess.
So, if you come...
A town full of losers!
I like it.
Was anyone emotionally shattered?
Come on, a minute ago I couldn't shut you up! Details, details!
The Mayor wasn't happy.
Oh, no.

Page 13/26

Martha May will be there.
She will?
And she'll see me.
A winner.
She'll be on me like fleegle flies on a flat-faced floogle horse.
I'm sorry to disappoint you, Martha, baby, but the G train has left the
station.
So, will you come?
All right.
I don't know if it's that adorable twinkle in your eye or that
nonconformist streak that reminds me of a younger, less hairy me.
But you've convinced me.
Who knows? This Whobilation could change my entire outlook on life!
Really?
No.
There you are, honey.
You can make snow angels later.
We can't be late for the Whobilation!
The nerve of those Whos.
Inviting me down there on such short notice.
Even if I wanted to go, my schedule wouldn't allow it.
"4:
solve world hunger tell no one. "5:30, jazzercise. "6:30, dinner with me."
I can't cancel that again.
"7:
I'm booked.
If I bumped the loathing to 9:00, I'd have time to lay in bed stare at the
ceiling and slip slowly into madness.
But what would I wear?
It's not a dress, it's a kilt!
Sicko!
Stupid.
Ugly.
Out of date.
This is ridiculous.
If I can't find something nice to wear, I'm not going!
That's it, I'm not going.
It's time for our Holiday Cheer-meister of the Year Award!
Congratulations, Mr. Grinch!
He isn't here.
What?
He didn't show?

Page 14/26

Who could have predicted this?
All right. I'll swing by for a minute, allow them to envy me grab a handful
of popcorn shrimp, and blow out of there.
But what if it's a cruel prank? What if it's a cash bar?
How dare they?
All right, I'll go.
But I'll be fashionably late.
No. Yes. No. Yes. No!
Yes!
Definitely not!
All right. I've made my decision!
I'm going, and that's that.
Had my fingers crossed.
Maybe I should flip a coin!
I guess the award goes to the runner-up.
That's right. A man for whom Christmas comes not once a year but every
minute of every day.
A handsome, noble man.
A man who has had his tonsils removed twice!
That's an interesting story.
You see, what happened was...
Hello, Martha.
He made it!
Cindy.
Honey!
Look...
Hot crowd. Hot crowd.
I believe I'm here to accept an award of some kind.
And the child mentioned a check.
No, I didn't.
All right, then, give me the award.
Come on, while I'm young!
Don't you worry, Mr. Holiday Cheer-meister, you'll get your award.
But first, a little family reunion.
They nursed you. They clothed you.
Here they are your old biddies!
Are you two still living?
We missed you!
Rose. The sweater. The sweater, Rose.
Sweater? What are you talkin' about? No, I can't!
I can't do that!
Don't touch me there!
Put him in the Chair of Cheer!
Chair of Cheer?

Page 15/26

What's the Chair of Cheer?
You didn't tell me about the Chair of Cheer.
Please, Mr. Grinch.
No. I can't do it, honestly.
I'm not ready. It's too much, too soon!
It's that time of year.
The Cheer-meister's ride in the Chair of Cheer!
Put me down! I mean it!
I've got a lawyer.
There'll be hell to pay!
First, you'll put your taste buds to the test as you judge the Who pudding
cook-off!
Mine first.
I really don't know...
No, mine's the best!
You'll enjoy this!
This is not pudding.
What is it?
This is mine. Yummy, yummy, yummy.
Christmas conga!
Look at the time. I really should be getting back.
All right!
Fruitcake, tra-la-la!
No.
Fudge Judge.
Made it myself.
Yeah? Mine are homemade too.
Okay.
Put it in. Bring it on!
Is that all you got?
Is that all you got? Come on.
Out of the way, slow-mo!
Excuse me.
He's number one in the sack race run!
Number one! I'm number one!
I'm number one!
No child can beat the Grinch!
I beat you.
He won!
And now it's time for the moment we've all been waiting for.
Yes! My award.
Write the check.
There's no check.
Are you sure? Because I thought I heard someone mention a check.

Page 16/26

I said, there's no check. And now it's time for Present Pass-it-on!
As always, we start with our Cheer-meister.
The gift of a Christmas shave.
Look at that hack job!
Yes, yes, yes. Good times!
Good times.
And now, I have a little something for the love of my life.
Martha May please become Mrs. Augustus May-Who.
Augustus.... If you agree to be my wife along with a lifetime supply of
happiness, you'll also receive this: It's a new car!
Generously provided by the taxpayers of Whoville!
What do you say, Martha?
You got 20 seconds on the clock.
I....
These gifts are quite dazzling.
Of course they are.
That's what it's all about, isn't it?
That's what it's always been about!
Gifts!
Gifts.
Gifts, gifts, gifts.
You want to know what happens to your gifts?
They all come to me. In your garbage.
You see what I'm saying?
In your garbage!
I could hang myself with all the bad Christmas neckties I found at the
dump!
And the avarice.
The avarice never ends!
"I want golf clubs." "I want diamonds." "I want a pony, so I can ride it
twice, get bored, and sell it to make glue."
Look, I don't want to make waves, but this whole Christmas season is
stupid, stupid, stupid!
There is, however one teeny-tiny Christmas tradition I find quite
meaningful.
Mistletoe.
Now, pucker up and kiss it, Whoville!
Somebody's fabulous!
All right, your turn! Go on!
Let's go!
No!
Excuse me, old-timer.
Mind if I wet my whistle?
That's my good stuff!

Page 17/26

Burn, baby! Burn!
The Whomanity!
Let's go! Come on!
No, wait!
Do something.
Right!
Calling all units. Calling all units.
Taxi!
It's because I'm green, isn't it?
Halt!
Evening, folks. Mind if I ride along?
You might want to scooch over.
You did the right thing.
Out of the way!
That's gonna hurt in the morning.
It's gonna blow!
You fellas all right?
How about a nice hat?
Lou?
I'm hurt, Lou.
I'm hurt, and I don't hurt easily.
But you and your family....
I'm so disappointed.
Can we just get back to Christmas the way it should be?
Grinch-less?
Merry Christmas!
Merry Christmas!
I just wanted everybody to be together for Christmas.
I quite enjoyed that.
I hope I get another invite soon.
Come on, come on!
Good thing we have a spare.
Suffering snorkelblatz!
They're relentless!
Only four hours till Christmas!
Narrator:
would wake bright and early and rush for their toys. Grinch: And then, oh
the noise! Oh the noise, noise, noise noise!

Narrator:
they'll feast, and they'll feast. Grinch: And they'll feast feast feast
feast!

Page 18/26

They'll eat their Who-pudding and rare Who roast beast! And that's
something I just Can not stand in the least.
Oh, no. I'm speaking in rhyme!
Blast you Whos!
Narrator:
bring, the more the Grinch thought Grinch: I must stop this whole thing.
Why for year after year I've put up with it now. I must stop this Christmas
from coming - But how?
I mean, in what way?
"Christmas is goin' to the dogs "We're scoffing down the turkey and the
grog "Things are looking very good, it's true"
Are you having a holly, jolly Christmas?
Wrong-o!
If you're not going to help me then you might as well....
Narrator:
wonderful, Awful idea.
Grinch:
Narrator: The Grinch laughed in his throat. And he made a quick Santy Claus
hat and coat.
And he chuckled and clucked At this great Grinchy trick. Grinch: With this
coat and this hat, I'll look just like St. Nick.
I asked for three-quarters, not five-eighths.
Stay focused!
Air bag is a little slow.
But that's what these tests are for!
Fat boy should be finishing up anytime now.
Talk about a recluse.
He only comes out once a year, and he never catches any flak for it!
Probably lives up there to avoid the taxes.
Merry Christmas!
Oopsie.
Grinch:
Grinch? No.
The Grinch simply said: If I can't find a reindeer I'll make one instead.
Oh, Max!
So he called his dog Max Grinch: MAX!!!! And he took some red thread, And
tied a big horn On top of his head.

Page 19/26

All right.
You're a reindeer. Here's your motivation.
You're Rudolph, a freak with a red nose, nobody likes you.
Then one day, Santa picks you and you save Christmas.
No, forget that part. We'll improvise.
Just keep it kind of loosey-goosey.
You hate Christmas! You're gonna steal it!
Saving Christmas was a lousy ending. Way too commercial.
Action!
Brilliant!
You reject your own nose because it represents the glitter of
commercialism!
Why didn't I think of that?
Cut, print, check the gate. Moving on.
That feels good.
Here goes nothin', hot dog!
Wow!
This is nuts!
On, Crasher! On, Thrasher!
On, Vomit and Blitzkrieg!
We're gonna die!
We're gonna die!
I'm going to throw up, and then I'm gonna die!
Mommy, tell it to stop!
Almost lost my cool there.
Welcome to Whoville, Max.
Betty?
Betty?
What?
Did you hear something?
It's Santa!
Go right back to sleep.
He'd slide down the chimney, a rather tight pinch, But if Santa could do
it, then so could the Grinch.
Grinch:
2-and-a-half with a combo tuck and pike. High degree of difficulty.
Narrator:
Blasted water weight! Goes right to my hips.

Page 20/26

Grinch:
Narrator:
Grinch:
Narrator:

Narrator:
Slunk?
He eyed the Whos' feast. He took the Who pudding. He took the roast beast.
Hike!
Then he stuffed all the food up the chimney with glee. (Grinch throws bag
up the "chimney") Grinch: And now-- Narrator: grinned the Grinch--- Grinch:
I'll stuff up the tree.
Narrator:
when he heard a small sound like the coo of a dove.
(Cindy Lou Enters in Pajamas)
Cindy Lou:
Narrator:
got out of be for a cup of cold water.
Cindy Lou:
Narrator:
he thought up a lie, and he thought it up quick.
Grinch:
lied. Grinch: There's a light on this tree That won't light on one side.
Santa, what's Christmas really about?
Vengeance!
I mean presents I suppose.
I was afraid of that.
Santa?
What?
Don't forget the Grinch.
I know he's mean and hairy and smelly.

Page 21/26

His hands might be cold and clammy.
But I think he's actually kind of sweet.
Sweet?
You think he's sweet?
Merry Christmas, Santa.
Narrator:
Nice kid. Bad judge of character.
...he went to the chimney and stuffed the tree up.
And the last thing he took was the log for their fire. On their walls he
left nothing but some hooks and some wire.
And the one speck of food that he'd left in the house was a crumb that was
even too small for a mouse.
Then he slithered and slunk with a smile most unpleasant, around each Who
home and he took every present.
Clearance sale.
Everything must go.
What now?
Martha have you ever kissed a man who lost his tonsils twice?
No, silly!
But it's an experience that I've always longed for.
Kiss me, you fool!
What are you laughing at Rudolph?
It's all you, Maxie!
3,000 feet up, up the side of Mount Crumpit he rode with his load to the
tiptop to dump it.
We did it!
We did it! We did it!
That wasn't so bad, was it, Max?
Grinch:
All those Whos down in Whoville Will all cry What an embarrassment! I've
been robbed!
Mayor May-Who?! Oh, dearest me!
I wonder who could have done this.
Tell you people one thing: Invite the Grinch destroy Christmas.
Invite the Grinch destroy Christmas!
But did anyone listen to me?
I did.
No.
You choose to listen to a little not-to-be-taken-seriously girl who hasn't
even grown into her nose yet.
Cindy, I hope you're very proud of what you've done.
If she isn't, I am.

Page 22/26

Father:
What?
I.... I'm glad.
He's glad.
Mayor:
the Grinch virtually wrecked.... No, not wrecked, pulverized Christmas. Is
that what I'm hearing?
Father:
the gifts or the contests or the fancy lights. That's what Cindy's been
trying to tell everyone! And me. She's been trying to tell me.
Mayor:
Father:
don't need anything more for Christmas than this right here, my family!
Who's all cheering: Merry Christmas, everybody!
Merry Christmas!
Merry Christmas, you hunk of burnin' Who!
Give me a break.
Merry Christmas!
Mr. Grinch?
Mr. Grinch?
Now for the final note in my symphony of downright nasty not-niceness!
The crescendo of my odious opus!
The wailing and the gnashing of teeth.
The bellowing of the bitterly bummed out!
It'll be like music to my ears!
Narrator:
started in low, Then it started to grow.
But the sound wasn't sad. Why, this sounded merry. But it was merry. Very.
Every Who down in Whoville, The tall and the small, were singing without
any presents at all.
He hadn't stopped Christmas from coming. It came. Grinch: Somehow or other,
it came Just the same!
Mr. Grinch?
Narrator:
Stood puzzling, and puzzling.
Grinch:

Page 23/26

tags! It came without packages, boxes or bags!
Narrator:
the Grinch thought of something he hadn't before.
Grinch:
Christmas, perhaps, means a little bit more.
(Grinch in pain - heart is growing)
Max! Help me! I'm feeling!
Narrator:
the Grinch's small heart grew three sizes that day.
What's happening to me?
I'm all... toasty inside.
And I'm leaking.
Oh, Max.
I love you!
All right, that's enough. Knock it off. Beat it!
Get out of here!
One step at a time.
No. The sleigh. The presents.
They'll be destroyed!
And I care!
What is the deal?
Wait!
This can't happen!
It shouldn't! It couldn't! It mustn't! It wouldn't!
Not now, not then, not ever again!
No!
Oh, well.
It's just toys, right?
Hi, Mr. Grinch!
Cindy Lou?!
What are you doing up there?
I came to see you. No one should be alone on Christmas.
No!
Grinch:
Cindy Lou:
Spread eagle! Nailed it!
Are you all right?
Are you kiddin'?
The sun is bright and the powder's bitchin'!

Page 24/26

Now scoot over! It's my turn to drive!
I'd better slow this buggy down!
We're gonna crash!
Now you listen to me, young lady!
Even if we're horribly mangled there'll be no sad faces on Christmas.
What is it?
Help!
Cindy!
Grinch?
My baby!
Grab an end.
By the way, these lights match your outfit perfectly.
This could be more difficult to negotiate.
Heads up, Whoville!
Hurry! Here he comes!
Out of the way! I have no insurance!
Yeah!
Run for your lives!
Watch out, I can't stop!
Daddy, move!
Dad, move it!
Thanks for the help.
Hi, Daddy!
Hi, Cindy, honey!
Merry Christmas one and all!
Cindy!
Mommy!
All right.
What do we have here?
You got me, Officer!
I did it!
I'm the Grinch that stole Christmas.
And I'm sorry.
Aren't you gonna cuff me?
Put me in a choke hold? Blind me with pepper spray?
You heard him, Officer. He admitted it.
I'd go with the pepper spray.
Yes, I heard him, all right.
He said he was sorry.
Besides, it looks like everything is all here and accounted for.
Help me out here, people.
Martha?
Merry Christmas, August May-Who!
I'm afraid I do have something for you!

Page 25/26

Your ring back.
Sorry but my heart belongs to someone else.
No hard feelings?
Cheer up, dude. It's Christmas.
Merry Christmas, Mr. Grinch.
Your cheek is so....
I know.
Hairy?
No.
Greasy?
Stinky? Do I have a zit?
No.
Warm.

Narrator:
And he - he himself, the Grinch, carved the roast beast.
Yeah!
There's nothin' like the holidays.
Who wants the gizzard?
I do!
Too late!
That'll be mine.

Page 26/26

THE END
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)