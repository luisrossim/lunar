import{A as q,B as I,C as E,H as j,J as D,K as T,L as P,M as A,N as z,O as B,P as F,Q as L,b as f,c as v,d as _,e as l,f as b,h as C,j as m,k as p,m as g,n as y,o as M,p as o,q as r,r as c,s as k,t as x,u as a,v as w,w as O,x as S}from"./chunk-VERCTP36.js";var h=(()=>{let e=class e{constructor(n){this.http=n,this.urlInit="https://www.omdbapi.com/?apikey=e8db2703&s=The+Walking+Dead",this.urlByName="https://www.omdbapi.com/?apikey=e8db2703&t=",this.urlByID="https://www.omdbapi.com/?apikey=e8db2703&i="}getInitMovies(){return this.http.get(this.urlInit)}getMovieById(n){return this.http.get(`${this.urlByID}${n}`)}getMovieByName(n){return this.http.get(`${this.urlByName}${n}`)}};e.\u0275fac=function(i){return new(i||e)(_(E))},e.\u0275prov=f({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var V=(()=>{let e=class e{constructor(){}spaceToPlus(n){return n.replace(/ /g,"+")}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=f({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var K=()=>({background:"#ababab10"});function Q(t,e){t&1&&(o(0,"div",35)(1,"div",36)(2,"div",37),c(3,"p-skeleton",38),r()()()),t&2&&(m(3),y(S(2,K)))}function X(t,e){if(t&1&&(o(0,"div",47)(1,"div",48)(2,"div")(3,"a",19),c(4,"img",20),r()(),o(5,"div",49)(6,"small"),a(7),r()()()()),t&2){let u=e.$implicit;m(3),g("routerLink","movie/"+u.imdbID),m(1),x("src",u.Poster,C),m(3),w(u.Title)}}function J(t,e){if(t&1&&(o(0,"div")(1,"div",39)(2,"div",35)(3,"div",40)(4,"div",41)(5,"div",42)(6,"p",43),a(7," lunar home works"),c(8,"i",44),r()(),o(9,"p-carousel",45),M(10,X,8,3,"ng-template",46),r()()()()()()),t&2){let u=k();m(9),g("value",u.initMovies)("numVisible",6)("numScroll",6)("circular",!1)("responsiveOptions",u.responsiveOptions)}}var H=(()=>{let e=class e{constructor(n,i){this.movieService=n,this.spaceToPlusService=i,this.initMovies=[],this.bestMovie={},this.loading=!0}ngOnInit(){this.fetchInitMovies(),this.fetchBestMovie(),this.responsiveSlide()}fetchInitMovies(){this.movieService.getInitMovies().subscribe({next:n=>{this.initMovies=n.Search},error:n=>{console.log(n)}})}fetchBestMovie(){let n="The Last Of Us",i=this.spaceToPlusService.spaceToPlus(n);this.movieService.getMovieByName(i).subscribe({next:s=>{this.bestMovie=s},error:s=>{console.log(s)}})}timeOut(){setTimeout(()=>{this.loading=!1},700)}responsiveSlide(){this.responsiveOptions=[{breakpoint:"1900px",numVisible:6,numScroll:6},{breakpoint:"1600px",numVisible:5,numScroll:5},{breakpoint:"1450px",numVisible:4,numScroll:4},{breakpoint:"1230px",numVisible:3,numScroll:3},{breakpoint:"1050px",numVisible:2,numScroll:2},{breakpoint:"868px",numVisible:1,numScroll:1}]}};e.\u0275fac=function(i){return new(i||e)(p(h),p(V))},e.\u0275cmp=l({type:e,selectors:[["app-home"]],decls:52,vars:6,consts:[["class","container-xxl page-container mb-3",4,"ngIf"],[4,"ngIf"],[1,"container-xxl","section-container","search-section"],[1,"row"],["pAnimateOnScroll","","enterClass","fadeinleft","leaveClass","fadeinright",1,"col-md-8","col-12","search-section-1","animation-duration-3000","animation-ease-in-out"],[1,"row","p-2"],[1,"col-12","col-sm-7","col-lg-9"],[1,"fs-4","fw-bold"],[1,"col-12","col-sm-5","col-lg-3","button-search"],["routerLink","search"],[1,"text-center"],[1,"col-12","text-body-tertiary"],[1,"col-md-1","col-12"],["pAnimateOnScroll","","enterClass","flipleft","leaveClass","fadeinright",1,"col-md-3","col-12","col-img","animation-duration-3000","animation-ease-in-out"],["src","../../../assets/horrormovie.svg","alt",""],[1,"bg-fake","section-2"],[1,"container-xxl","section-container"],["pAnimateOnScroll","","enterClass","zoomin","leaveClass","fadeinright",1,"background-card","d-flex","gap-3","animation-duration-1000","animation-ease-in-out"],["pAnimateOnScroll","","enterClass","scalein","leaveClass","fadeinright",1,"min-card","best-movie","d-flex","animation-duration-3000","gap-3","animation-ease-in-out"],[3,"routerLink"],[3,"src"],[1,"best-movie-desc"],[1,"text-body-secondary"],[1,"text-body-tertiary"],["pAnimateOnScroll","","enterClass","fadein","leaveClass","fadeinright",1,"best-movie-section-2","d-flex","flex-column","gap-2","animation-duration-3000","animation-ease-in-out"],[1,"d-flex","gap-2","flex-column"],["href","#",1,"p-1"],[1,"space","position-relative","bg-fake","section-3"],["pAnimateOnScroll","","enterClass","fadein","leaveClass","fadeout",1,"img-section","animation-duration-1000","animation-ease-in-out"],["pAnimateOnScroll","","enterClass","fadeinright","leaveClass","fadeoutright",1,"glass-effect-1","mini-card","d-flex","flex-column","gap-3","text-center","animation-duration-3000","animation-ease-in-out"],[1,"bi","bi-stars","fs-1"],["href","https://www.artstation.com/guweiz","target","_blank",1,"text-decoration-none"],["pAnimateOnScroll","","enterClass","fadein","leaveClass","fadeout",1,"glass-effect-1","mini-card-2","animation-duration-3000","animation-ease-in-out"],["href","https://www.artstation.com/guweiz","target","_blank"],["width","120px","src","https://cdna.artstation.com/p/users/avatars/000/136/170/large/cd4e6acc3de9a95046a932eead960d09.jpg?1449285434","alt",""],[1,"container-xxl","page-container","mb-3"],[1,"pb-5","pt-5"],[1,"d-flex","flex-column","align-items-center","pt-5"],["width","85vw","height","50vh"],["pAnimateOnScroll","","enterClass","fadein","leaveClass","fadeout",1,"img-bg-1","animation-duration-1000","animation-ease-in-out"],[1,"section-1-space"],["pAnimateOnScroll","","enterClass","scalein","leaveClass","fadeout",1,"glass-effect-2","rounded-4","animation-duration-2000","animation-ease-out"],[1,"ani-center","text-animation"],[1,"line","typing-animation"],[1,"bi","bi-stars","ms-2"],[3,"value","numVisible","numScroll","circular","responsiveOptions"],["pTemplate","item"],[1,"banner"],["pAnimateOnScroll","","enterClass","flipleft","leaveClass","fadeout",1,"min-card","d-flex","flex-column","text-center","animation-duration-2000","animation-ease-out"],[1,"desc"]],template:function(i,s){i&1&&(M(0,Q,4,3,"div",0)(1,J,11,5,"div",1),o(2,"div")(3,"div",2)(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6)(8,"p",7),a(9,"Procurar filmes"),r()(),o(10,"div",8)(11,"a",9)(12,"p",10),a(13," clique aqui "),r()()(),o(14,"div",11),a(15," Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi fuga sed explicabo esse vero, optio labore blanditiis voluptatem corrupti laudantium veritatis consequuntur sit laborum. Eligendi earum tenetur cumque sunt temporibus molestiae porro eos unde dolorem totam aperiam aut, atque maiores suscipit similique ipsum praesentium nesciunt est aliquam repellat deserunt officiis nam. Expedita recusandae possimus rerum non at deleniti ipsum perferendis ex laudantium, atque mollitia omnis voluptatibus iure laboriosam sunt cum dignissimos ipsam aperiam reiciendis consequuntur nobis! "),r()()(),c(16,"div",12),o(17,"div",13),c(18,"img",14),r()()()(),o(19,"div",15)(20,"div",16)(21,"div",17)(22,"div",18)(23,"div")(24,"a",19),c(25,"img",20),r()(),o(26,"div",21)(27,"p",7),a(28),r(),o(29,"p",22),a(30,"2023"),r(),o(31,"p",23),a(32),r()()(),o(33,"div",24)(34,"div")(35,"p",10),a(36,"Lorem, ipsum dolor!"),r()(),o(37,"div",25)(38,"a",26),a(39,"---------"),r(),o(40,"a",26),a(41,"---------"),r()()()()()(),o(42,"div",27)(43,"div",28)(44,"div",16)(45,"div",29),c(46,"i",30),o(47,"a",31),a(48,"Z.W. GUWEIZ"),r()(),o(49,"div",32)(50,"a",33),c(51,"img",34),r()()()()()),i&2&&(g("ngIf",s.initMovies.length==0),m(1),g("ngIf",s.initMovies.length>0),m(23),g("routerLink","movie/"+s.bestMovie.imdbID),m(1),x("src",s.bestMovie.Poster,C),m(3),O(" ",s.bestMovie.Title," "),m(4),O(" ",s.bestMovie.Plot," "))},dependencies:[q,A,B,z,F,T],styles:['.text-animation[_ngcontent-%COMP%]{margin:0;padding:0;display:inline-block;box-sizing:border-box}.ani-center[_ngcontent-%COMP%]{display:flex;justify-content:center}.line[_ngcontent-%COMP%]{margin:2rem 0rem 0rem;box-sizing:border-box;white-space:nowrap;overflow:hidden}.typing-animation[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_typing 2s steps(40) 1s normal both!important}.min-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:140px;height:210px;margin:1rem 0rem;border-radius:.7rem;position:relative;background-size:cover;transition:all .3s}.section-2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:0}.background-card[_ngcontent-%COMP%]{justify-content:space-between;padding:1.8rem;border-radius:1.5rem;background-color:#151b22}.best-movie[_ngcontent-%COMP%]{padding:.3rem;flex-direction:row;align-items:start}.best-movie[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border:1px solid rgba(255,255,255,.551)}.best-movie-desc[_ngcontent-%COMP%]{text-align:start}.best-movie-desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child, .best-movie-desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{margin:0rem}.best-movie-section-2[_ngcontent-%COMP%]{justify-content:space-between;padding:1rem;background-color:#1c2832;border-radius:1rem}.best-movie-section-2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-align:center;border-radius:1rem;text-decoration:none;border:1px solid}.best-movie-section-2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#6d91c76f}.min-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{cursor:pointer;transform:scale(1.1)}.banner[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-around;align-items:center}.desc[_ngcontent-%COMP%]{padding:0rem 2rem;word-wrap:break-word;overflow-wrap:break-word}.img-section[_ngcontent-%COMP%]{height:600px;background-image:url("./media/bg-8-OYDZB4YP.jpg");background-repeat:no-repeat;background-size:cover;background-position:top center;transition:all .5s}.img-bg-1[_ngcontent-%COMP%]{background-image:url("./media/ExfHZEnXMAYGOQn2-GD7K6G2R.jpg");background-repeat:no-repeat;background-size:cover;background-attachment:fixed;background-position:left center;transition:all .5s}.space[_ngcontent-%COMP%]{padding-top:6rem}.mini-card[_ngcontent-%COMP%]{margin-top:2rem;padding:2rem 5rem;position:absolute;display:inline-block;border-radius:1rem;top:0%;left:20%;transform:-50%,-50%;transition:all 1s}.mini-card-2[_ngcontent-%COMP%]{padding:1rem;position:absolute;display:inline-block;border-radius:5rem;border:none;top:40%;left:25%;transform:-50%,-50%;transition:all 1s}.mini-card-2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:5rem;transition:.7s;transition-timing-function:cubic-bezier(1,-.34,0,1.34)}.mini-card-2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{transform:scale(1.2);rotate:360deg}.bg-fake[_ngcontent-%COMP%]{background-color:var(--main-color)}.section-2[_ngcontent-%COMP%]{padding:6rem 0rem}.search-section-1[_ngcontent-%COMP%]{border:2px solid #1C2832;border-radius:1.5rem;padding:0}.search-section[_ngcontent-%COMP%]{margin-top:7rem}.search-section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{margin:0}.search-section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:250px;transition:background-color 1.5s,rotate 2.5s;transition-timing-function:cubic-bezier(1,-1,-1,1.5)}.search-section[_ngcontent-%COMP%]   .col-img[_ngcontent-%COMP%]{display:flex;justify-content:center;background-color:#1c2832;border-radius:1.5rem;transition:all 1.5s;transition-timing-function:cubic-bezier(1,-1,-1,1.5)}.button-search[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.button-search[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{background-color:#e0e0e0;border:1px solid white;border-radius:1rem;padding:.3rem;color:#05070a;transition:all .3s}.button-search[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover{background-color:#6d91c76f;border-radius:1rem;border:1px solid rgba(var(--bs-link-color-rgb),var(--bs-link-opacity, 1));padding:.3rem;color:rgba(var(--bs-link-color-rgb),var(--bs-link-opacity, 1))}@keyframes _ngcontent-%COMP%_typing{0%{width:0}to{width:9.4em}}@keyframes _ngcontent-%COMP%_blinkCursor{0%{border-right-color:#ffffffbf}to{border-right-color:transparent}}@media (min-width: 1200px){.search-section[_ngcontent-%COMP%]:hover   .col-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{background-color:transparent;border:1px solid rgba(109,145,199,.4352941176);border-radius:100%;rotate:360deg}.search-section[_ngcontent-%COMP%]:hover   .col-img[_ngcontent-%COMP%]{background-color:transparent}}@media (max-width: 1200px){.background-card[_ngcontent-%COMP%]{flex-direction:column;align-items:center}.best-movie-section-2[_ngcontent-%COMP%]{align-self:end}}@media (max-width: 768px){.container-xxl[_ngcontent-%COMP%]{padding:0rem 1rem!important}.img-bg-1[_ngcontent-%COMP%]{background-position:20%;background-attachment:scroll}.mini-card[_ngcontent-%COMP%]{padding:2rem;top:0%;left:5%}.best-movie-section-2[_ngcontent-%COMP%]{text-align:center;align-self:center}.mini-card-2[_ngcontent-%COMP%]{top:70%;left:5%}.best-movie[_ngcontent-%COMP%]{flex-direction:column;align-items:center}.best-movie-desc[_ngcontent-%COMP%]{margin-top:1rem;text-align:center}.search-section[_ngcontent-%COMP%]{background-color:#151b22}.search-section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{padding:2rem 0rem}.search-section[_ngcontent-%COMP%]   .col-img[_ngcontent-%COMP%]{margin-top:2rem}}@media (max-width: 380px){.min-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:130px;height:200px}.background-card[_ngcontent-%COMP%]{padding:1.5rem 1rem}.search-section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:180px}}']});let t=e;return t})();var U=(()=>{let e=class e{constructor(n,i,s){this.movieService=n,this.route=i,this.router=s,this.movie={}}ngOnInit(){let n=this.route.snapshot.paramMap.get("imdbID");this.fetchMovie(n)}fetchMovie(n){this.movieService.getMovieById(n).subscribe({next:i=>{this.movie=i},error:i=>{console.log(i),this.router.navigateByUrl("")}})}};e.\u0275fac=function(i){return new(i||e)(p(h),p(j),p(D))},e.\u0275cmp=l({type:e,selectors:[["app-movie"]],decls:2,vars:0,consts:[[1,"page-container"]],template:function(i,s){i&1&&(o(0,"div",0),a(1,` Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aliquam, pariatur sit maiores ducimus quas, ipsum rerum dolorem totam velit nemo dignissimos laboriosam vitae odit. Impedit quo mollitia numquam tenetur recusandae eius velit sed quia molestiae porro magnam nesciunt iste deserunt a, dolore incidunt reiciendis? Adipisci hic rerum neque praesentium nemo excepturi dolore officia, animi, esse asperiores minima autem magnam repellendus corporis optio necessitatibus provident incidunt explicabo velit maiores consectetur deleniti, reprehenderit delectus quisquam. Illo, laudantium quos fugit velit excepturi dolorum optio id. Consectetur at impedit officia iste animi dicta, aspernatur accusamus, magni quae nemo iusto perferendis iure soluta deserunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sed aperiam in eligendi porro pariatur alias quod incidunt minus cumque atque labore accusamus distinctio ea sequi commodi, nihil enim repellat aliquid debitis possimus sint consectetur. Cumque iste aspernatur reiciendis unde vel consectetur nobis, labore facere ipsam dignissimos recusandae? Incidunt aliquam quia illo a expedita quas blanditiis maxime totam vitae voluptatem quasi, non, saepe eveniet quidem inventore eaque, officia qui corrupti odit dignissimos cum dolorem ad sapiente? Ut facere doloribus placeat nobis repellendus iste, dolorem error, maxime quibusdam ipsa praesentium doloremque asperiores quam delectus alias cum sequi vel obcaecati nulla, laudantium accusamus fugiat. Nostrum dolore eaque velit unde. Dolorum debitis quos et placeat facere quidem sequi voluptates voluptatibus ipsum eum iure id recusandae distinctio sed, impedit ullam ea tenetur atque fuga similique! Magni veniam, fugiat rerum tempora asperiores atque quisquam minima iusto enim earum sequi quo omnis inventore et est, nihil doloribus praesentium? Accusamus labore nisi voluptatum repudiandae dignissimos consectetur nulla unde iste sint dicta nam natus non modi rerum, assumenda, aspernatur aperiam, inventore magni eius corrupti ratione minima nemo voluptate obcaecati. Ipsum totam doloribus aliquid quam aspernatur facere expedita placeat dicta commodi ea quis, odit necessitatibus minima, cumque dolores nulla.
`),r())}});let t=e;return t})();var $=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=l({type:e,selectors:[["app-movie-filter"]],decls:2,vars:0,template:function(i,s){i&1&&(o(0,"p"),a(1,"movie-filter works!"),r())}});let t=e;return t})();var G=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=l({type:e,selectors:[["app-movie-list"]],decls:2,vars:0,template:function(i,s){i&1&&(o(0,"p"),a(1,"movie-list works!"),r())}});let t=e;return t})();var R=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=l({type:e,selectors:[["app-movie-management"]],decls:6,vars:0,consts:[[1,"container-xxl","page-container"],[1,"section-1-space"]],template:function(i,s){i&1&&(o(0,"div",0)(1,"div",1)(2,"p"),a(3,"movie-management works!"),r(),c(4,"app-movie-filter")(5,"app-movie-list"),r()())},dependencies:[$,G]});let t=e;return t})();var ie=[{path:"",component:H},{path:"movie/:imdbID",component:U},{path:"search",component:R}],Z=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=b({type:e}),e.\u0275inj=v({imports:[P.forChild(ie),P]});let t=e;return t})();var Ie=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=b({type:e}),e.\u0275inj=v({imports:[I,L,Z]});let t=e;return t})();export{Ie as MovieModule};
