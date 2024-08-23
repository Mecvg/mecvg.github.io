document.addEventListener("DOMContentLoaded", function () {
  const gamesHTML = `
    <link rel="stylesheet" href="/games.css">
        <a href="/projects/1/" class="game" id="game1"> 1 </a>
        <a href="/projects/1v1-soccer/" class="game" id="game339">
          1 on 1 Soccer
        </a>
        <a href="/projects/1v1lol/" class="game" id="game2"> 1v1.lol </a>
        <a href="/projects/color-match/" class="game" id="game329">
          1010 Color Match
        </a>
        <a href="/projects/1010-deluxe/" class="game" id="game340">
          1010 Deluxe
        </a>

        <a href="/projects/10-minutes-till-dawn/" class="game" id="game4">
          10 Minutes Till Dawn
        </a>

        <a href="/projects/2048/" class="game" id="game6"> 2048 </a>

        <a href="/projects/2048-multitask/" class="game" id="game7">
          2048 Multitask
        </a>

        <a href="/projects/3d-bowling/" class="game" id="game328">
          3D Bowling
        </a>
        <a href="/projects/pandas-japan/" class="game" id="game330">
          3 Pandas in Japan
        </a>
        <a href="/projects/8-ball/" class="game" id="game331">
          8 Ball Pool
        </a>

        <a href="/projects/9007199254740992/" class="game" id="game8">
          900719925474
        </a>

        <a href="/projects/achievementunlocked/" class="game" id="game9">
          Achievement Unlocked
        </a>
        <a href="/projects/adam-eve/" class="game" id="game332">
          Adam and Eve 5 Part 1
        </a>
        <a href="/projects/adam-eve-2/" class="game" id="game333">
          Adam and Eve 5 Part 2
        </a>
        <a href="/projects/adarkroom/" class="game" id="game10">
          A Dark Room
        </a>

        <a href="/projects/adrenalinechallenge/" class="game" id="game11">
          Adrenaline Challenge
        </a>

        <a href="/projects/adventure-anxiety/" class="game" id="game291">
          Adventure with Anxiety
        </a>
        <a href="/projects/adventure-drivers/" class="game" id="game12">
          Adventure Drivers
        </a>

        <a href="/projects/ages-of-conflict/" class="game" id="game13">
          Ages of Conflict
        </a>
        <a href="/projects/alienhominid/" class="game" id="game14">
          Alien Hominid
        </a>

        <a href="/projects/amidst-the-clouds/" class="game" id="game15">
          Amidst the Clouds
        </a>

        <a href="/projects/among-us/" class="game" id="game16">
          Among Us
        </a>

        <a href="/projects/angry-sharks/" class="game" id="game17">
          Angry Sharks
        </a>
        <a href="/projects/apple-shooter/" class="game" id="game334">
          Apple Shooter
        </a>
        <a href="/projects/aquapark-slides/" class="game" id="game18">
          Aquapark Slides
        </a>
        <a href="/projects/arcane-archer/" class="game" id="game338">
          Arcane Archer
        </a>

        <a href="/projects/avalanche/" class="game" id="game19">
          Avalanche
        </a>
        <a href="/projects/awesome-tanks-2/" class="game" id="game337">
          Awesome Tanks 2
        </a>

        <a href="/projects/backrooms/" class="game" id="game20">
          Backrooms
        </a>

        <a href="/projects/backrooms-2d/" class="game" id="game292">
          Backrooms 2D
        </a>
        <a href="/projects/bacon-may-die/" class="game" id="game293">
          Bacon May Die</a>

        <a href="/projects/bad-ice-cream/" class="game" id="game21">
          Bad Ice Cream
        </a>

        <a href="/projects/bad-ice-cream-2/" class="game" id="game22">
          Bad Ice Cream 2
        </a>

        <a href="/projects/bad-ice-cream-3/" class="game" id="game23">
          Bad Ice Cream 3
        </a>

        <a href="/projects/baldis-basics/" class="game" id="game24">
          Baldi's Basics
        </a>
        <a
          href="/projects/ball-sort-halloween/"
          class="game"
          id="game341"
        >
          Ball Sort Halloween
        </a>
        <a href="/projects/ball-sort-puzzle/" class="game" id="game342">
          Ball Sort Puzzle
        </a>
        <a href="/projects/ball-sort-soccer/" class="game" id="game343">
          Ball Sort Soccer
        </a>
        <a href="/projects/ballistic/" class="game" id="game344">
          Ballistic
        </a>
        <a href="/projects/basket-and-ball/" class="game" id="game345">
          Basket and Ball
        </a>
        <a href="/projects/basketball-stars/" class="game" id="game26">
          Basketball Stars
        </a>
        <a href="/projects/basket-champs/" class="game" id="game365">
          Basket Champs
        </a>
        <a href="/projects/basket-random/" class="game" id="game294">
          Basket Random
        </a>

        <a href="/projects/battleforgondor/" class="game" id="game28">
          Battle for Gondor
        </a>

        <a href="/projects/bigredbutton/" class="game" id="game29">
          Big Red Button
        </a>
        <a href="/projects/biker-street/" class="game" id="game366">
          Biker Street
        </a>
        <a href="/projects/bitcoin-clicker/" class="game" id="game295">
          Bitcoin Clicker
        </a>
        <a href="/projects/bitlife/" class="game" id="game30">
          Bitlife
        </a>

        <a href="/projects/blacholesquare/" class="game" id="game31">
          Black Hole Square
        </a>

        <a href="/projects/blackknight/" class="game" id="game32">
          Black Knight
        </a>
        <a href="/projects/block-pig/" class="game" id="game346">
          Block the Pig
        </a>
        <a href="/projects/bloonstd/" class="game" id="game33">
          Bloons TD
        </a>

        <a href="/projects/bloonstd2/" class="game" id="game34">
          Bloons TD 2
        </a>

        <a href="/projects/bloonstd4/" class="game" id="game321">
          Bloons TD 4
        </a>

        <a href="/projects/bloxors/" class="game" id="game35">
          Bloxors
        </a>
        <a href="/projects/blumgi-rocket/" class="game" id="game350">
          Blumgi Rocket
        </a>
        <a href="/projects/blumgi-slime/" class="game" id="game348">
          Blumgi Slime
        </a>

        <a href="/projects/bobtherobber2/" class="game" id="game36">
          Bob the Robber 2
        </a>
        <a href="/projects/bomb-it-7/" class="game" id="game367">
          Bomb It 7
        </a>
        <a href="/projects/bottle-flip/" class="game" id="game351">
          Bottle Flip
        </a>
        <a href="/projects/bouncy-woods/" class="game" id="game352">
          Bouncy Woods
        </a>
        <a href="/projects/boxhead2play/" class="game" id="game37">
          Box Head
        </a>
        <a href="/projects/boxel-rebound/" class="game" id="game347"
          >Boxel Rebound</a>

        <a href="/projects/boxing-random/" class="game" id="game38">
          Boxing Random
        </a>
        <a href="/projects/breakingthebank/" class="game" id="game39">
          Breaking the Bank
        </a>

        <a href="/projects/btts/" class="game" id="game40">
          Big Tower Tiny Square
        </a>
        <a href="/projects/bubble-pop/" class="game" id="game353">
          Bubble Pop Adventures
        </a>
        <a href="/projects/burrito-bison/" class="game" id="game318">
          Burrito Bison
        </a>

        <a href="/projects/cannon-basketball-4/" class="game" id="game42">
          Cannon Basketball 4
        </a>

        <a href="/projects/canyondefense/" class="game" id="game43">
          Canyon Defense
        </a>
        <a href="/projects/car-rush/" class="game" id="game354">
          Car Rush
        </a>
        <a href="/projects/cars-simulator/" class="game" id="game44">
          Cars Simulator
        </a>

        <a href="/projects/cell-machine/" class="game" id="game45">
          Cell Machine
        </a>

        <a href="/projects/champion-island/" class="game" id="game46">
          Champion Island
        </a>

        <a href="/projects/championarcher/" class="game" id="game47">
          Champion Archer
        </a>
        <a href="/projects/checkers-legend/" class="game" id="game357">
          Checkers Legend
        </a>
        <a href="/projects/circlo/" class="game" id="game50"> circloO </a>
        <a href="/projects/circlo2/" class="game" id="game356">
          circloO 2
        </a>
        <a href="/projects/clicker-heroes/" class="game" id="game358">
          Clicker Heroes
        </a>
        <a href="/projects/climb-over-it/" class="game" id="game359">
          Climb Over It
        </a>
        <a href="/projects/cluster-rush/" class="game" id="game51">
          Cluster Rush
        </a>
        <a href="/projects/connect3/" class="game" id="game52">
          Connect 3
        </a>

        <a href="/projects/cookie-clicker/" class="game" id="game53">
          Cookie Clicker
        </a>

        <a href="/projects/core-ball/" class="game" id="game54">
          Core Ball
        </a>

        <a href="/projects/craftmine/" class="game" id="game55">
          CraftMine
        </a>
        <a href="/projects/crazy-cars/" class="game" id="game320">
          Crazy Cars
        </a>
        <a href="/projects/creativekillchamber/" class="game" id="game56">
          Creative Kill Chamber
        </a>

        <a href="/projects/crossyroad/" class="game" id="game57">
          Crossy Road
        </a>

        <a href="/projects/csgo-clicker/" class="game" id="game58">
          CS:GO Clicker
        </a>

        <a href="/projects/ctr/" class="game" id="game59">
          Cut the Rope
        </a>

        <a href="/projects/ctr-holiday/" class="game" id="game60">
          Cut the Rope Holiday
        </a>

        <a href="/projects/ctr-tr/" class="game" id="game61">
          Cut the Rope Time Travel
        </a>

        <a href="/projects/cubefield/" class="game" id="game62">
          Cubefield
        </a>

        <a href="/projects/dante/" class="game" id="game64"> Dante </a>
        <a href="/projects/dead-again/" class="game" id="game355">
          Dead Again
        </a>
        <a href="/projects/deal-or-no-deal/" class="game" id="game65">
          Deal or No Deal
        </a>

        <a href="/projects/death-run-3d/" class="game" id="game66">
          Death Run 3D
        </a>
        <a href="/projects/deepest-sword/" class="game" id="game317">
          Deepest Sword
        </a>

        <a href="/projects/defend-the-tank/" class="game" id="game67">
          Defend the Tank
        </a>
        <a href="/projects/dino-bros/" class="game" id="game349">
          Dino Bros
        </a>
        <a href="/projects/dino-merge/" class="game" id="game360">
          Dinosaurus Merge Master
        </a>

        <a href="/projects/doctor-acorn2/" class="game" id="game68">
          Doctor Acorn 2
        </a>
        <a href="/projects/dodge/" class="game" id="game296"> Dodge </a>

        <a href="/projects/doge2048/" class="game" id="game69">
          Doge 2048
        </a>

        <a href="/projects/DogeMiner/" class="game" id="game70">
          Doge Miner
        </a>

        <a href="/projects/doodle-jump/" class="game" id="game71">
          Doodle Jump
        </a>

        <a href="/projects/down-the-hill/" class="game" id="game368">
          Down The Hill
        </a>
        <a href="/projects/dragon-vs-bricks/" class="game" id="game73">
          Dragon vs Bricks
        </a>

        <a href="/projects/draw-the-hill/" class="game" id="game74">
          Draw the Hill
        </a>
        <a href="/projects/drift-boss/" class="game" id="game327">
          Drift Boss
        </a>
        <a href="/projects/drive-mad/" class="game" id="game75">
          Drive Mad
        </a>

        <a href="/projects/ducklife/" class="game" id="game297">
          Duck Life
        </a>

        <a href="/projects/ducklife-2/" class="game" id="game298">
          Duck Life 2
        </a>

        <a href="/projects/ducklife-3/" class="game" id="game299">
          Duck Life 3
        </a>

        <a href="/projects/ducklife4/" class="game" id="game79">
          Duck Life 4
        </a>

        <a href="/projects/edge-surf/" class="game" id="game80">
          Edge Let's Surf
        </a>

        <a href="/projects/edgenotfound/" class="game" id="game81">
          Edge Not Found
        </a>

        <a href="/projects/eel-slap/" class="game" id="game82">
          Eel Slap
        </a>
        <a href="/projects/eggy-car/" class="game" id="game369">
          Eggy Car
        </a>

        <a href="/projects/elastic-face/" class="game" id="game300">
          Elastic Face
        </a>
        <a href="/projects/endless-truck/" class="game" id="game371">
          Endless Truck
        </a>
        <a href="/projects/endlesswar3/" class="game" id="game84">
          Endless War 3
        </a>

        <a href="/projects/escaping-prison/" class="game" id="game362">
          Escaping the Prison
        </a>
        <a href="/projects/evil-glitch/" class="game" id="game86">
          Evil Glitch
        </a>

        <a href="/projects/evolution/" class="game" id="game87">
          Evolution
        </a>

        <a href="/projects/exo/" class="game" id="game88"> Exo </a>

        <a href="/projects/factoryballs/" class="game" id="game89">
          Factory Balls Forever
        </a>

        <a
          href="/projects/fancypantsadventures/"
          class="game"
          id="game90"
        >
          Fancy Pants Adventures
        </a>

        <a href="/projects/fake-virus/" class="game" id="game91">
          Fake Virus
        </a>
        <a href="/projects/farm-match/" class="game" id="game372">
          Farm Match Seasons
        </a>
        <a
          href="/projects/fireboywatergirlforesttemple/"
          class="game"
          id="game92"
        >
          Fireboy and Watergirl
        </a>

        <a href="/projects/flappy-bird/" class="game" id="game94">
          Flappy Bird
        </a>

        <a href="/projects/flashtetris/" class="game" id="game95">
          Flash Tetris
        </a>
        <a href="/projects/fleeing-complex/" class="game" id="game363">
          Fleeing the Complex
        </a>
        <a href="/projects/fnaf/" class="game" id="game373">
          Five Nights at Freddy's
        </a>

        <a href="/projects/fnaw/" class="game" id="game97">
          Five Nights at Winston's
        </a>
        <a href="/projects/football-brawl/" class="game" id="game374">
          Football Brawl
        </a>
        <a href="/projects/football-legends/" class="game" id="game375">
          Football Legends
        </a>
        <a href="/projects/football-strike/" class="game" id="game376">
          Football Strike
        </a>
        <a href="/projects/froggys-battle/" class="game" id="game99">
          Froggy's Battle
        </a>
        <a href="/projects/fruit-ninja/" class="game" id="game380">
          Fruit Ninja
        </a>
        <a href="/projects/frying-nemo/" class="game" id="game101">
          Frying Nemo
        </a>
        <a href="/projects/funnyshooter2/" class="game" id="game290">
          Funny Shooter 2
        </a>

        <a href="/projects/game-inside/" class="game" id="game102">
          Game Inside a Game Inside a Game...
        </a>

        <a
          href="/projects/generic-fishing-game/"
          class="game"
          id="game103"
        >
          Generic Fishing Game
        </a>
        <a href="/projects/geometry-dash/" class="game" id="game377">
          Geometry Dash Classic
        </a>

        <a href="/projects/geodash/" class="game" id="game104">
          Geometry Dash Scratch
        </a>

        <a
          href="/projects/georgeandtheprinter/"
          class="game"
          id="game105"
        >
          George and the Printer
        </a>

        <a href="/projects/getaway-shootout/" class="game" id="game106">
          Getaway Shootout
        </a>
        <a href="/projects/get-on-top/" class="game" id="game378">
          Get On Top
        </a>

        <a href="/projects/getting-over-it/" class="game" id="game301">
          Getting Over It
        </a>

        <a href="/projects/gimme-the-airpod/" class="game" id="game107">
          Gimme the Airpod
        </a>

        <a href="/projects/go-ball/" class="game" id="game109">
          Go Ball
        </a>

        <a href="/projects/gobdun/" class="game" id="game379"> Gobdun </a>
        <a href="/projects/goodnight/" class="game" id="game110">
          GOODNIGHT
        </a>

        <a href="/projects/google-feud/" class="game" id="game111">
          Google Feud
        </a>

        <a href="/projects/gravity-soccer/" class="game" id="game113">
          Gravity Soccer
        </a>

        <a href="/projects/greybox/" class="game" id="game114">
          Grey Box Testing
        </a>
        <a href="/projects/groovy-ski/" class="game" id="game381">
          Groovy Ski
        </a>
        <a href="/projects/gswitch/" class="game" id="game382">
          G-Switch
        </a>
        <a href="/projects/gswitch-2/" class="game" id="game383">
          G-Switch 2
        </a>
        <a href="/projects/gswitch-3/" class="game" id="game384">
          G-Switch 3
        </a>
        <a href="/projects/guess-kitty/" class="game" id="game386">
          Guess the Kitty
        </a>
        <a href="/projects/gura-temberine/" class="game" id="game302">
          Gura Temberine
        </a>
        <a href="/projects/hackertype/" class="game" id="game116">
          Hacker Typer
        </a>

        <a href="/projects/handshakes/" class="game" id="game117">
          Handshakes
        </a>
        <a href="/projects/hanger/" class="game" id="game387"> Hanger </a>

        <a href="/projects/happy-hop/" class="game" id="game118">
          Happy Hop
        </a>

        <a href="/projects/heads-arena/" class="game" id="game389">
          Heads Arena
        </a>
        <a href="/projects/head-soccer/" class="game" id="game388">
          Head Soccer 2023
        </a>
        <a href="/projects/hide-and-smash/" class="game" id="game390">
          Hide and Smash
        </a>
        <a href="/projects/hop-pop-it/" class="game" id="game391">
          Hop Pop It
        </a>
        <a href="/projects/hba/" class="game" id="game119">
          Hover Bot Arena
        </a>

        <a href="/projects/helicopter/" class="game" id="game120">
          Helicopter
        </a>

        <a href="/projects/hexempire/" class="game" id="game121">
          Hex Empire
        </a>

        <a href="/projects/hextris/" class="game" id="game123">
          Hextris
        </a>

        <a href="/projects/hungry-lamu/" class="game" id="game124">
          Hungry Lamu
        </a>
        <a href="/projects/icy-head-2/" class="game" id="game392">
          Icy Purple Head 2
        </a>
        <a href="/projects/icy-head-3/" class="game" id="game393">
          Icy Purple Head 3
        </a>
        <a href="/projects/idle-breakout/" class="game" id="game125">
          Idle Breakout
        </a>
        <a href="/projects/idle-mining/" class="game" id="game335">
          Idle Mining Empire
        </a>
        <a href="/projects/idle-restaurants/" class="game" id="game394">
          Idle Restaurants
        </a>
        <a href="/projects/impossiblequiz/" class="game" id="game127">
          Impossible Quiz
        </a>
        <a href="/projects/infinite-soccer/" class="game" id="game336">
          Infinite Soccer
        </a>
        <a
          href="/projects/infiltrating-airship/"
          class="game"
          id="game364"
        >
          Infiltrating the Airship
        </a>
        <a href="/projects/iron-snout/" class="game" id="game304">
          Iron Snout
        </a>

        <a href="/projects/jetpack-joyride/" class="game" id="game129">
          Jetpack Joyride
        </a>
        <a href="/projects/jewels-blitz-5/" class="game" id="game395">
          Jewels Blitz 5
        </a>

        <a href="/projects/just-fall/" class="game" id="game130">
          JustFall.lol
        </a>

        <a href="/projects/just-one-boss/" class="game" id="game131">
          Just One Boss
        </a>

        <a href="/projects/kitchen-gun-game/" class="game" id="game132">
          Kitchen Gun Game
        </a>

        <a href="/projects/kittencannon/" class="game" id="game133">
          Kitten Cannon
        </a>

        <a href="/projects/knife-master/" class="game" id="game134">
          Knife Master
        </a>

        <a href="/projects/learntofly/" class="game" id="game136">
          Learn To Fly
        </a>

        <a href="/projects/learntofly2/" class="game" id="game137">
          Learn To Fly 2
        </a>
        <a href="/projects/little-alchemy-2/" class="game" id="game396">
          Little Alchemy 2
        </a>

        <a
          href="/projects/madalin-stunt-cars-2/"
          class="game"
          id="game138"
        >
          Madalin Stunt Cars 2
        </a>
        <a href="/projects/marbles-sorting/" class="game" id="game397">
          Marbles Sorting
        </a>

        <a href="/projects/mario/" class="game" id="game140"> Mario </a>

        <a href="/projects/mario-bros/" class="game" id="game305">
          Mario Bros
        </a>

        <a href="/projects/marvinspectrum/" class="game" id="game141">
          Marvin Spectrum
        </a>

        <a href="/projects/matrixrampage/" class="game" id="game142">
          Matrix Rampage
        </a>

        <a href="/projects/meme2048/" class="game" id="game143">
          Meme 2048
        </a>

        <a href="/projects/merge-round-racers/" class="game" id="game144">
          Merge Round Racers
        </a>

        <a href="/projects/mineblocks/" class="game" id="game145">
          Mine Blocks
        </a>

        <a href="/projects/minecraft-15/" class="game" id="game146">
          Minecraft 1.5 (Eaglecraft)
        </a>

        <a href="/projects/minecraft-18/" class="game" id="game147">
          Minecraft 1.8 (Eaglecraft)
        </a>
        <a href="/projects/minecraft-case/" class="game" id="game398">
          Minecraft Case Simulator
        </a>

        <a href="/projects/minecraft-classic/" class="game" id="game148">
          Minecraft Classic
        </a>

        <a href="/projects/minecraftbeta/" class="game" id="game149">
          Minecraft Classic Hacks
        </a>

        <a href="/projects/minesweeper/" class="game" id="game150">
          Minesweeper
        </a>

        <a href="/projects/miniputt/" class="game" id="game151">
          Mini-putt
        </a>

        <a href="/projects/missiles/" class="game" id="game152">
          Missiles
        </a>
        <a href="/projects/money-movers/" class="game" id="game399">
          Money Movers
        </a>
        <a href="/projects/money-movers-2/" class="game" id="game400">
          Money Movers 2
        </a>
        <a href="/projects/money-movers-3/" class="game" id="game401">
          Money Movers 3
        </a>
        <a href="/projects/monkey-mart/" class="game" id="game385">
          Monkey Mart
        </a>
        <a href="/projects/motox3m/" class="game" id="game153">
          Moto X3M
        </a>

        <a href="/projects/motox3m2/" class="game" id="game154">
          Moto X3M 2
        </a>

        <a href="/projects/motox3m-pool/" class="game" id="game155">
          Moto X3M Pool
        </a>

        <a href="/projects/motox3m-spooky/" class="game" id="game156">
          Moto X3M Spooky
        </a>

        <a href="/projects/motox3m-winter/" class="game" id="game157">
          Moto X3M Winter
        </a>
        <a href="/projects/moving-truck/" class="game" id="game402">
          Moving Truck
        </a>
        <a href="/projects/mr-bullet/" class="game" id="game403">
          Mr Bullet
        </a>
        <a href="/projects/mutazone/" class="game" id="game404">
          Mutazone
        </a>
        <a href="/projects/my-rusty-submarine/" class="game" id="game158">
          My Rusty Submarine
        </a>
        <a href="/projects/n-gon/" class="game" id="game159"> n-gon </a>

        <a href="/projects/ninja/" class="game" id="game160"> Ninja </a>
        <a href="/projects/ninja-cat/" class="game" id="game405"> Ninja Cat </a>

        <a href="/projects/ninjavsevilcorp/" class="game" id="game161">
          Ninja vs Evil Corp
        </a>

        <a href="/projects/ns-shaft/" class="game" id="game163">
          NS-Shaft
        </a>

        <a href="/projects/nut-simulator/" class="game" id="game306">
          Nut Simulator
        </a>
        <a href="/projects/OfflineParadise/" class="game" id="game164">
          Offline Paradise
        </a>

        <a href="/projects/om-bounce/" class="game" id="game165">
          Om Nom Bounce
        </a>

        <a href="/projects/ovo/" class="game" id="game166"> OvO </a>
        <a href="/projects/ovo-2/" class="game" id="game406"> OvO 2 </a>
        <a href="/projects/ovo-dimensions/" class="game" id="game407"> OvO Dimensions </a>
        <a href="/projects/pacman/" class="game" id="game408">Pacman</a>

        <a href="/projects/pandemic2/" class="game" id="game167">
          Pandemic 2
        </a>
        <a href="/projects/papa-cherry-saga/" class="game" id="game409">
          Papa Cherry Saga
        </a>

        <a href="/projects/papasburgeria/" class="game" id="game168">
          Papa's Burgeria
        </a>

        <a href="/projects/papaspizzaria/" class="game" id="game169">
          Papa's Pizzaria
        </a>

        <a href="/projects/paperio2/" class="game" id="game170">
          Paper.io 2
        </a>

        <a href="/projects/paper-3/" class="game" id="game307">
          Paper.io 3
        </a>
        <a href="/projects/paper-minecraft/" class="game" id="game308">
          Paper Minecraft
        </a>
        <a href="/projects/papery-planes/" class="game" id="game171">
          Papery Planes
        </a>
        <a href="/projects/parking-fury/" class="game" id="game410">
          Parking Fury
        </a>
        <a href="/projects/parking-fury-2/" class="game" id="game411">
          Parking Fury 2
        </a>
        <a href="/projects/particle-clicker/" class="game" id="game172">
          Particle Clicker
        </a>
        <a href="/projects/pcraft/" class="game" id="game309">
          P.Craft
        </a>
        <a href="/projects/penalty-shooter-2/" class="game" id="game361">
          Penalty Shooters 2
        </a>
        <a href="/projects/pixel-gun-survival/" class="game" id="game173">
          Pixel Gun Survival
        </a>
        <a href="/projects/plants-vs-zombies/" class="game" id="game310">
          Plants vs Zombies
        </a>

        <a href="/projects/polybranch/" class="game" id="game174">
          PolyBranch
        </a>

        <a href="/projects/popcat-classic/" class="game" id="game175">
          POPCAT CLASSIC
        </a>

        <a href="/projects/portalflash/" class="game" id="game176">
          Portal (Flash)
        </a>

        <a href="/projects/protektor/" class="game" id="game178">
          Protektor
        </a>

        <a href="/projects/push-the-square/" class="game" id="game179">
          Push The Square
        </a>

        <a href="/projects/push-your-luck/" class="game" id="game180">
          Push Your Luck
        </a>

        <a href="/projects/rabbit-samurai/" class="game" id="game181">
          Rabbit Samurai
        </a>

        <a href="/projects/rabbit-samurai2/" class="game" id="game182">
          Rabbit Samurai 2
        </a>
        <a href="/projects/retro-bowl/" class="game" id="game184">
          Retro Bowl
        </a>

        <a href="/projects/riddleschool/" class="game" id="game185">
          Riddle School 1
        </a>

        <a href="/projects/riddleschool2/" class="game" id="game186">
          Riddle School 2
        </a>

        <a href="/projects/riddleschool3/" class="game" id="game187">
          Riddle School 3
        </a>

        <a href="/projects/riddleschool4/" class="game" id="game188">
          Riddle School 4
        </a>

        <a href="/projects/riddleschool5/" class="game" id="game189">
          Riddle School 5
        </a>

        <a href="/projects/riddletransfer/" class="game" id="game190">
          Riddle School Transfer 1
        </a>

        <a href="/projects/riddletransfer2/" class="game" id="game191">
          Riddle School Transfer 2
        </a>
        <a href="/projects/rise-higher/" class="game" id="game311">
          Rise Higher
        </a>
        <a href="/projects/rolling-forests/" class="game" id="game192">
          Rolling Forests
        </a>

        <a href="/projects/rolly-vortex/" class="game" id="game193">
          Rolly Vortex
        </a>

        <a href="/projects/rooftop-snipers/" class="game" id="game194">
          Rooftop Snipers
        </a>
        <a href="/projects/roper/" class="game" id="game319"> Roper </a>

        <a href="/projects/ruffle/" class="game" id="game195">
          Ruffle Emulator
        </a>

        <a href="/projects/sandboxels/" class="game" id="game196">
          Sandboxels
        </a>

        <a href="/projects/santy-is-home/" class="game" id="game197">
          Santy Is Home
        </a>

        <a href="/projects/scrapmetal/" class="game" id="game199">
          Scrap Metal 3
        </a>

        <a href="/projects/shuttledeck/" class="game" id="game201">
          SHUTTLEDECK
        </a>
        <a href="/projects/skibidi-strike/" class="game" id="game370">
          Skibidi Strike
        </a>

        <a href="/projects/sky-car-stunt/" class="game" id="game202">
          Sky Car Stunt
        </a>

        <a href="/projects/sleepingbeauty/" class="game" id="game203">
          Sleeping Beauty
        </a>

        <a href="/projects/slime-rush-td/" class="game" id="game204">
          Slime Rush TD
        </a>

        <a href="/projects/slope/" class="game" id="game205"> Slope </a>

        <a href="/projects/slope-2/" class="game" id="game206">
          Slope 2
        </a>

        <a href="/projects/slope-ball/" class="game" id="game207">
          Slope Ball
        </a>

        <a href="/projects/sm64/" class="game" id="game208">
          Super Mario 64
        </a>

        <a href="/projects/smashkarts/" class="game" id="game209">
          Smash Carts
        </a>

        <a href="/projects/smokingbarrels/" class="game" id="game210">
          Smoking Barrels
        </a>

        <a href="/projects/snowbattle/" class="game" id="game211">
          Snowbattle
        </a>

        <a href="/projects/snow-ride/" class="game" id="game322">
          Snow Rider 3D
        </a>

        <a href="/projects/soccer-random/" class="game" id="game212">
          Soccer Random
        </a>

        <a href="/projects/soccer-skills/" class="game" id="game213">
          Soccer Skills Euro Cup
        </a>

        <a href="/projects/soldier-legend/" class="game" id="game214">
          Soldier Legend
        </a>

        <a href="/projects/solitaire/" class="game" id="game215">
          Solitare
        </a>

        <a href="/projects/sort-the-court/" class="game" id="game216">
          Sort The Court
        </a>

        <a href="/projects/space-company/" class="game" id="game218">
          Space Company
        </a>

        <a href="/projects/spacegarden/" class="game" id="game219">
          Space Garden
        </a>

        <a href="/projects/stack/" class="game" id="game220"> Stack </a>

        <a href="/projects/stack-bump-3d/" class="game" id="game221">
          Stack Bump 3D
        </a>

        <a href="/projects/station-141/" class="game" id="game223">
          Station 141
        </a>

        <a href="/projects/stealingthediamond/" class="game" id="game224">
          Stealing The Diamond
        </a>

        <a href="/projects/stick-archers/" class="game" id="game225">
          Stick Archers
        </a>

        <a href="/projects/stick-duel-battle/" class="game" id="game226">
          Stick Duel Battle
        </a>

        <a href="/projects/stick-merge/" class="game" id="game227">
          Stick Merge
        </a>

        <a href="/projects/stickman-boost/" class="game" id="game228">
          Stickman Boost
        </a>

        <a href="/projects/stickman-golf/" class="game" id="game229">
          Stickman Golf
        </a>

        <a href="/projects/stickman-hook/" class="game" id="game230">
          Stickman Hook
        </a>

        <a href="/projects/stickwar/" class="game" id="game232">
          Stickman War
        </a>

        <a href="/projects/stormthehouse2/" class="game" id="game233">
          Storm The House 2
        </a>

        <a href="/projects/subway-surfers/" class="game" id="game234">
          Subway Surfers
        </a>

        <a href="/projects/subway-surfers-ny/" class="game" id="game235">
          Subway Surfers New York
        </a>

        <a href="/projects/superhot/" class="game" id="game236">
          Superhot
        </a>

        <a
          href="/projects/supermarioconstruct/"
          class="game"
          id="game237"
        >
          Super Mario Construct
        </a>

        <a href="/projects/swerve/" class="game" id="game240"> Swerve </a>

        <a href="/projects/synesthesia/" class="game" id="game241">
          Synesthesia
        </a>

        <a
          href="/projects/tactical-weapon-pack-2/"
          class="game"
          id="game242"
        >
          Tactical Weapon Pack 2
        </a>

        <a href="/projects/tacticalassasin2/" class="game" id="game243">
          Tactical Assasin 2
        </a>
        <a href="/projects/tag/" class="game" id="game316"> Tag </a>

        <a href="/projects/tank-trouble-2/" class="game" id="game244">
          Tank Trouble 2
        </a>

        <a href="/projects/tanuki-sunset/" class="game" id="game245">
          Tanuki Sunset
        </a>

        <a href="/projects/temple-run-2/" class="game" id="game246">
          Temple Run 2
        </a>
        <a href="/projects/terraira/" class="game" id="game312">
          Terraira
        </a>
        <a href="/projects/territorial/" class="game" id="game313">
          Territorial
        </a>
        <a href="/projects/thebattle/" class="game" id="game247">
          The Battle
        </a>

        <a href="/projects/the-final-earth/" class="game" id="game248">
          The Final Earth
        </a>

        <a href="/projects/the-hotel/" class="game" id="game249">
          The Hotel
        </a>

        <a href="/projects/theheist/" class="game" id="game250">
          The Heist
        </a>

        <a href="/projects/there-is-no-game/" class="game" id="game251">
          There Is No Game
        </a>

        <a href="/projects/thisistheonlylevel/" class="game" id="game252">
          This Is The Only Level
        </a>

        <a href="/projects/tiny-fishing/" class="game" id="game253">
          Tiny Fishing
        </a>

        <a href="/projects/tiny-islands/" class="game" id="game254">
          Tiny Islands
        </a>

        <a href="/projects/tosstheturtle/" class="game" id="game255">
          Toss The Turtle
        </a>

        <a href="/projects/townscaper/" class="game" id="game256">
          Townscaper
        </a>
        <a href="/projects/trimps/" class="game" id="game314"> Trimps </a>

        <a href="/projects/tube-jumpers/" class="game" id="game257">
          Tube Jumpers
        </a>

        <a href="/projects/tunnel-rush/" class="game" id="game258">
          Tunnel Rush
        </a>

        <a href="/projects/twitch-tetris/" class="game" id="game260">
          Twitch Tetris
        </a>

        <a href="/projects/veloce/" class="game" id="game261"> VELOCE </a>

        <a href="/projects/vex3/" class="game" id="game262"> Vex 3 </a>

        <a href="/projects/vex4/" class="game" id="game263"> Vex 4 </a>

        <a href="/projects/vex5/" class="game" id="game264"> Vex 5 </a>

        <a href="/projects/vex6/" class="game" id="game265"> Vex 6 </a>

        <a href="/projects/vex7/" class="game" id="game266"> Vex 7 </a>
        <a href="/projects/vex8/" class="game" id="game326"> Vex 8 </a>

        <a href="/projects/volley-random/" class="game" id="game325">
          Volley Random
        </a>

        <a href="/projects/waterworks/" class="game" id="game267">
          Waterworks!
        </a>

        <a href="/projects/wallsmash/" class="game" id="game268">
          Wall Smash
        </a>

        <a href="/projects/weavesilk/" class="game" id="game269">
          Weave Silk
        </a>
        <a href="/projects/wbwwb/" class="game" id="game315">
          We Become What We Behold
        </a>

        <a
          href="/projects/webgl-fluid-simulation/"
          class="game"
          id="game270"
        >
          WebGL Fluid Sim
        </a>

        <a href="/projects/wolf3d/" class="game" id="game273">
          Wolfenstein 3D
        </a>

        <a href="/projects/wordle/" class="game" id="game274"> Wordle </a>

        <a
          href="/projects/worlds-hardest-game/"
          class="game"
          id="game275"
        >
          World's Hardest Game
        </a>

        <a
          href="/projects/worlds-hardest-game-2/"
          class="game"
          id="game276"
        >
          World's Hardest Game 2
        </a>

        <a href="/projects/x-trial-racing/" class="game" id="game277">
          X Trial Racing
        </a>

        <a href="/projects/xx142-b2exe/" class="game" id="game278">
          xx142-b2exe
        </a>

        <a href="/projects/yoshifabrication/" class="game" id="game279">
          Yoshi's Fabrication Station
        </a>

        <a href="/projects/you-are-bezos/" class="game" id="game280">
          You Are Jeff Bezos
        </a>`;
  const headSection = document.getElementsByTagName("head")[0];
  const linkStyle = document.createElement("link");
  let searchInput = document.createElement("div");
  searchInput.classList.add("side-search");
  searchInput.innerHTML = `
    <form class="side-search-input">
      <input type="text" placeholder="Search 200 Games" class="side-search-bar" id="sideSearch">
      <button class="side-search-btn" type="submit">Go</button>
    </form>
    <span id="nothing" style="padding-inline: 20px;">Womp womp, we don't have that game yet. Submit a request <a href="https://forms.gle/UpHgbAmLtUPCD5bs8" target="_blank" style="color: white;" id="nothing">here</a> or find another one!</span>
    <div class="games-container" id="list">
    </div>`;
  const rightArea = document.querySelector(".right");
  rightArea.appendChild(searchInput);
  let nameabc = document.getElementById("macvgmacvg").getAttribute("name");
  let eRecent = localStorage.getItem("macvgRecents");
  let recentArray = [];
  if (eRecent) {
    recentArray = eRecent.split(",");
  }
  let gamesInnerHTML = gamesHTML.split("</a>");
  let processedGamesArray = [];
  let processedIDArray = [];
  let processedHrefArray = [];
  const nothing = document.getElementById("nothing");
  const sideSearch = document.getElementById("sideSearch");
  const sideSearchForm = sideSearch.parentElement;
  gamesInnerHTML.forEach((gameInnerHTML) => {
    if (gameInnerHTML.trim() === "") return;
    let indexOfStart = gameInnerHTML.indexOf(">") + 1;
    let gameName = gameInnerHTML.substring(indexOfStart).trim();
    if (gameName) {
      processedGamesArray.push(gameName);
    }
  });
  gamesInnerHTML.forEach((gameInnerHTML) => {
    if (gameInnerHTML.trim() === "") return;
    let indexOfStart = gameInnerHTML.indexOf('id="') + 4;
    let gameID = gameInnerHTML.substring(indexOfStart).trim();
    let actualID = gameID.indexOf('"') + 1;
    let actualACTUALID = gameID.substring(0, actualID - 1);
    if (actualACTUALID) {
      processedIDArray.push(actualACTUALID);
    }
  });
  gamesInnerHTML.forEach((gameInnerHTML) => {
    if (gameInnerHTML.trim() === "") return;
    let indexOfStart = gameInnerHTML.indexOf('href="') + 6;
    let gameHref = gameInnerHTML.substring(indexOfStart).trim();
    let actualHref = gameHref.indexOf('"') + 1;
    let actualACTUALHref = gameHref.substring(0, actualHref - 1);
    if (actualACTUALHref) {
      processedHrefArray.push(actualACTUALHref);
    }
  });
  if (eRecent === null) {
    eRecent = "bruh";
  }
  if (!recentArray.includes(nameabc)) {
    recentArray.push(nameabc);
    eRecent = recentArray.join(",");
    localStorage.setItem("macvgRecents", eRecent);
  }
  sideSearch.addEventListener("click", () => {
    sideSearch.focus();
  });
  list.style.display = "none";
  nothing.style.display = "none";
  sideSearchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let searchTerm = sideSearch.value.toLowerCase();
    const list = document.getElementById("list");
    list.innerHTML = "";
    let results = [];
    for (var i = 0; i < processedGamesArray.length; i++) {
      var item = processedGamesArray[i];
      let gameIDProcessed = processedIDArray[i];
      let gameHrefProcessed = processedHrefArray[i];
      var itemText = item.toLowerCase();

      if (itemText.includes(searchTerm)) {
        let newGameElement = document.createElement("a");
        newGameElement.classList.add("side-game");
        newGameElement.setAttribute("href", gameHrefProcessed);
        newGameElement.setAttribute("id", gameIDProcessed);
        newGameElement.innerHTML = item;
        list.appendChild(newGameElement);
        results.push(item);
      }
    }
    if (results.length < 1) {
      nothing.style.display = "block";
      nothing.style.paddingTop = "20px";
      nothing.children[0].style.display = "inline";
    } else {
      nothing.style.paddingTop = "0px";
      nothing.style.display = "none";
      list.style.display = "flex";
    }
  });
  linkStyle.setAttribute("rel", "stylesheet");
  linkStyle.setAttribute("href", "/games.css");
  headSection.appendChild(linkStyle);
  console.log(linkStyle);
});
document.addEventListener("DOMContentLoaded", function () {
  const styleLink = document.querySelectorAll("link");
  styleLink.forEach((link) => {
    if (link.getAttribute("rel") == "stylesheet") {
      link.setAttribute("href", "/projects/style.css");
    }
  });
  function updateTheme() {
    let theme = localStorage.getItem("theme");
    if (theme === "light") {
      const root = document.documentElement;
      root.style.setProperty("--link", "rgb(225, 139, 9)");
      root.style.setProperty("--text-color", "black");
      root.style.setProperty("--shadow-color", "0px 0px 5px rgb(84, 84, 84)");
      root.style.setProperty("--black-color", "rgb(235, 235, 235)");
      root.style.setProperty("--bg-color", "rgb(235, 235, 235)");
      root.style.setProperty("--bg-color-2", "rgb(30, 30, 30)");
      root.style.setProperty("--group-bg-color", "rgb(140, 140, 140, 0.7)");
      root.style.setProperty("--bar-color", "rgb(200, 200, 200)");
    } else if (theme === "deep") {
      const root = document.documentElement;
      root.style.setProperty("--text-color", "white");
      root.style.setProperty("--link", "rgb(225, 139, 9)");
      root.style.setProperty("--shadow-color", "0px 5px 5px rgb(25,25,25)");
      root.style.setProperty("--black-color", "black");
      root.style.setProperty("--bg-color", "black");
      root.style.setProperty("--bg-color-2", "black");
      root.style.setProperty("--group-bg-color", "black");
      root.style.setProperty("--bar-color", "black");
      root.style.setProperty("--border", "rgb(50,50,50)");
    } else if (theme === "cyber") {
      const root = document.documentElement;
      root.style.setProperty("--link", "rgb(225, 139, 9)");
      root.style.setProperty("--text-color", "white");
      root.style.setProperty("--shadow-color", "0px 5px 5px #42053f");
      root.style.setProperty("--black-color", "black");
      root.style.setProperty("--bg-color", "#0b023a");
      root.style.setProperty("--bg-color-2", "#ff00a0");
      root.style.setProperty("--group-bg-color", "rgba(48, 4, 98, 0.7)");
      root.style.setProperty("--bar-color", "#12827e");
      root.style.setProperty("--border", "rgb(50,50,50)");
    } else if (theme === "custom") {
      const root = document.documentElement;
      let first = localStorage.getItem("first");
      let second = localStorage.getItem("second");
      document.documentElement.style.setProperty("--bg-color", first);
      document.documentElement.style.setProperty("--bar-color", second);
      document.documentElement.style.setProperty("--link", second);
      document.documentElement.style.setProperty("--text-color", "white");
      document.documentElement.style.setProperty("--black-color", "black");
      root.style.setProperty("--shadow-color", "transparent");
      root.style.setProperty("--bg-color-2", "white");
      root.style.setProperty("--group-bg-color", second);
    } else {
      const root = document.documentElement;
      root.style.setProperty("--text-color", "white");
      root.style.setProperty("--link", "rgb(225, 139, 9)");
      root.style.setProperty("--shadow-color", "transparent");
      root.style.setProperty("--black-color", "black");
      root.style.setProperty("--bg-color", "rgb(50, 50, 50)");
      root.style.setProperty("--bg-color-2", "white");
      root.style.setProperty("--group-bg-color", "rgba(40, 40, 40, 0.7)");
      root.style.setProperty("--bar-color", "rgb(70, 70, 70)");
    }
  }
  const star = document.getElementById("star");
  let nameabcc = document.getElementById("macvgmacvg").getAttribute("name");
  let existingDataa = localStorage.getItem("favorites");
  if (!existingDataa) {
    star.setAttribute("src", "/media/star-regular.svg");
  } else {
    let favoritesArray = existingDataa.split(",");
    const index = favoritesArray.indexOf(nameabcc);
    if (index !== -1) {
      star.src = "/media/star-solid.svg";
    } else {
      star.src = "/media/star-regular.svg";
    }
  }
  let links = document.querySelector(".links");
  let recent = document.createElement("a");
  let featured = document.createElement("a");
  let linky = Array.from(links.children);
  recent.innerHTML = "Recent";
  featured.innerHTML = "Featured";
  recent.classList.add("nav-link");
  featured.classList.add("nav-link");
  recent.setAttribute("href", "/recent.html");
  featured.setAttribute("href", "/featured.html");
  links.insertBefore(recent, linky[3]);
  links.insertBefore(featured, linky[4]);
  let linkss = Array.from(document.querySelectorAll(".nav-link"));
  linkss.forEach(function (link) {
    if (link.innerHTML === "Chat" || link.innerHTML === "Groups") {
      link.style.display = "none";
    }
    if (link.innerHTML === "MacBoard") {
      link.setAttribute("href", "/macboard");
    }
  });
  let crr = document.querySelector(".copyright");
  crr.innerHTML = "© 2024 MacWeb";
  const fullScreen = document.getElementById("fullscreen");
  const iframe = document.getElementById("iframe");
  const toolBar = document.querySelector(".tool-bar");
  const report = document.createElement("img");
  report.src = "/media/flag.svg";
  report.style.width = "18px";
  toolBar.insertBefore(report, fullScreen);
  const back = document.getElementById("back");
  back.style.display = "none";
  const download = document.getElementById("downloadd");
  if (download) {
    download.setAttribute("src", "/media/download.svg");
    download.addEventListener("click", function () {
      window.location.href = `/projects/zips/${nameabcc}.zip`;
    });
  }
  const share = document.getElementById("share");
  share.setAttribute("src", "/media/share-solid.svg");
  const gameFrame = document.getElementById("gameframe");
  fullScreen.setAttribute("src", "/media/expand.svg");
  fullScreen.addEventListener("click", function () {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      fullScreen.src = "/media/expand.svg";
    } else {
      gameFrame.requestFullscreen();
      iframe.style.height = "calc(100vh - 44px)";
      fullScreen.src = "/media/compress.svg";
    }
  });
  const downloadd = document.getElementById("download");
  if (downloadd) {
    downloadd.style.display = "none";
  }
  const up2 = document.createElement("div");
  const macvgClose = document.createElement("button");
  up2.style.width = "50%";
  up2.style.position = "fixed";
  up2.style.top = "25vh";
  up2.style.left = "25vw";
  up2.style.height = "50vh";
  up2.style.backgroundColor = "black";
  up2.style.color = "white";
  up2.style.zIndex = "100000000000";
  up2.style.borderRadius = "30px";
  up2.style.padding = "3%";
  up2.style.fontSize = "25px";
  up2.style.display = "none";
  up2.style.lineHeight = "40px";
  up2.style.fontFamily = "Arial, Helvetica, sans-serif";
  up2.style.boxShadow = "0px 0px 30px black";
  macvgClose.style.display = "block";
  macvgClose.style.width = "50%";
  macvgClose.style.fontFamily = "Arial, Helvetica, sans-serif";
  macvgClose.style.marginInline = "25%";
  macvgClose.style.padding = "10px";
  macvgClose.style.backgroundColor = "black";
  macvgClose.style.color = "white";
  macvgClose.style.borderRadius = "30px";
  macvgClose.style.marginBlock = "20px";
  macvgClose.style.fontWeight = "bold";
  macvgClose.style.cursor = "pointer";
  macvgClose.style.fontSize = "25px";
  macvgClose.style.border = "3px solid white";
  macvgClose.style.boxSizing = "border-box";
  up2.style.boxSizing = "border-box";
  up2.innerHTML =
    "Link copied! You can share it in an email, social media, text, website, or any other place to share the game!";
  macvgClose.innerHTML = "Done";
  macvgClose.addEventListener("click", function () {
    up2.style.display = "none";
  });
  let body23 = document.getElementsByTagName("body");
  body23[0].appendChild(up2);
  up2.appendChild(macvgClose);
  share.addEventListener("click", function () {
    let thing123 = window.location.href;
    navigator.clipboard.writeText(thing123);
    up2.style.display = "block";
  });
  report.addEventListener("click", function () {
    window.open("https://forms.gle/vKN71eKeMNGiswUY7", "_blank");
  });
  star.addEventListener("click", function () {
    let name = document.getElementById("macvgmacvg").getAttribute("name");
    if (star.src.includes("star-solid")) {
      star.src = "/media/star-regular.svg";
      let existingData = localStorage.getItem("favorites");
      let favoritesArray = existingData.split(",");
      const index = favoritesArray.indexOf(name);
      if (index !== -1) {
        favoritesArray.splice(index, 1);
        localStorage.setItem("favorites", favoritesArray);
      }
    } else {
      star.src = "/media/star-solid.svg";
      let existingData = localStorage.getItem("favorites");
      if (existingData === null) {
        existingData = "bruh";
      }
      let favoritesArray = existingData.split(",");
      if (!favoritesArray.includes(name)) {
        favoritesArray.push(name);
        existingData = favoritesArray.join(",");
        localStorage.setItem("favorites", existingData);
      }
    }
  });

  const games = document.querySelectorAll(".game");
  const logo = document.querySelector(".logo");
  logo.children[0].setAttribute("src", "/nav-logo.png");
  const gameIframe = document.getElementById("iframe");
  gameIframe.contentWindow.focus();
  gameIframe.contentWindow.addEventListener("click", () => {
    gameIframe.contentWindow.focus();
  });
  gameIframe.contentWindow.addEventListener("keydown", (event) => {
    let panicKeys = localStorage.getItem("panic");
    let href = localStorage.getItem("href");
    if (panicKeys) {
      if (href) {
        let keys = panicKeys.split(",");
        if (keys.length === 1 && event.key === keys[0]) {
          window.location.href = href;
        }
      } else {
        let href = "https://www.google.com";
        let keys = panicKeys.split(",");
        if (keys.length === 1 && event.key === keys[0]) {
          window.location.href = href;
        }
      }
    } else {
      localStorage.setItem("panic", "`");
      panicKeys = localStorage.getItem("panic");
      let keys = panicKeys.split(",");
      if (keys.length === 1 && event.key === keys[0]) {
        window.location.href = href;
      }
    }
  });
  games.forEach(function (game) {
    game.addEventListener("mouseover", function () {
      let innerThing = game.innerHTML;
      game.setAttribute("name", innerThing);
    });
  });

  const google = ["Google", "/media/google.png"];
  const canva = ["Home - Canva", "/media/canva.png"];
  const clever = ["Clever | Portal", "/media/clever.png"];
  const schoology = ["Home | Schoology", "/media/schoology.png"];
  const newTab = ["New Tab", "/media/new-tab.png"];

  function google1() {
    localStorage.setItem("title", google);
  }

  function canva1() {
    localStorage.setItem("title", canva);
  }

  function clever1() {
    localStorage.setItem("title", clever);
  }

  function schoology1() {
    localStorage.setItem("title", schoology);
  }

  function newTab1() {
    localStorage.setItem("title", newTab);
  }

  function unCloak() {
    const pageTon = document.querySelector(".cloak");
    const favicon = document.querySelector(".favicon");
    favicon.outerHTML = `<link class="favicon" rel="icon" type="image/x-icon" href="/media/logo.png" />`;
    pageTon.innerHTML = "Settings | MacVG";
    localStorage.setItem("title", "");
  }

  function panic() {
    const button = document.getElementById("name2").value;
    localStorage.setItem("panic", button);
  }

  function url() {
    const inputurl = document.getElementById("name3").value;
    localStorage.setItem("href", inputurl);
  }

  function cloaking() {
    const name = document.getElementById("name").value;
    const favicon = document.querySelector(".favicon");
    localStorage.title = name + "," + favicon.href;
  }

  function faviconing() {
    const pageTon = document.querySelector(".cloak");
    const favicon = document.querySelector(".favicon");
    const faviSRC = document.getElementById("name4").value;
    let thingy = [pageTon.innerHTML, faviSRC];
    favicon.innerHTML = `<link class="favicon" rel="icon" type="image/x-icon" href="${faviSRC}" />`;
    localStorage.setItem("title", thingy);
  }

  function changeName() {
    const titleFromStorage = localStorage.getItem("title");
    if (titleFromStorage && titleFromStorage.trim() !== "") {
      const pageTon = document.querySelector(".cloak");
      const head = document.querySelector("head");

      if (pageTon && head) {
        const [title, image] = titleFromStorage.split(",");

        if (title && image) {
          pageTon.innerHTML = title;

          let favicon = document.querySelector(".favicon");
          if (favicon) {
            favicon.remove(); // Remove existing favicon if any
          }

          favicon = document.createElement("link");
          favicon.className = "favicon";
          favicon.rel = "icon";
          favicon.type = "image/x-icon";
          favicon.href = image;
          head.appendChild(favicon);
        }
      }
    }
  }

  changeName();
  updateTheme();
  let stuff = document.querySelectorAll(".logo");
  stuff.forEach((thing) => {
    if (thing.getAttribute("href") === "/macvg/") {
      thing.setAttribute("href", "/");
    }
  });
});
