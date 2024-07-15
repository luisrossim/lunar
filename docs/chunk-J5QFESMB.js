import{$ as w,A as g,B as k,C as z,D as B,E as R,H as $,I as _,J as q,K as V,L as U,M as G,Y as H,_ as W,a as T,aa as F,ba as Z,ca as I,d as O,da as Y,e as P,ea as Q,f as A,fa as X,g as u,ga as J,h as S,ha as K,ia as ee,j as h,ja as te,ka as ie,l as a,la as ne,m as p,ma as oe,n as D,na as re,oa as ae,p as d,q as N,r as f,s as r,t as o,u as l,v as y,w as M,x as C,y as s,z as x}from"./chunk-L6SU2VMM.js";var b=(()=>{let e=class e{constructor(n){this.http=n,this.api="https://www.omdbapi.com/?apikey=e8db2703"}getInitMovies(){return this.http.get(`${this.api}&s=The+Walking+Dead`)}getMovieById(n){return this.http.get(`${this.api}&i=${n}`)}getMovieByName(n){return this.http.get(`${this.api}&t=${n}`)}getMoviesBySearch(n){return this.http.get(`${this.api}${n.name}${n.year}${n.type}`)}};e.\u0275fac=function(i){return new(i||e)(A(G))},e.\u0275prov=O({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var se=(()=>{let e=class e{constructor(){}spaceToPlus(n){return n.replace(/ /g,"+")}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=O({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var Ce=()=>({background:"#ababab10"});function xe(t,e){t&1&&(r(0,"div",35)(1,"div",36)(2,"div",37),l(3,"p-skeleton",38),o()()()),t&2&&(a(3),N(k(2,Ce)))}function Me(t,e){if(t&1&&(r(0,"div",47)(1,"div",48)(2,"div")(3,"a",19),l(4,"img",20),o()(),r(5,"div",49)(6,"small"),s(7),o()()()()),t&2){let c=e.$implicit;a(3),d("routerLink","movie/"+c.imdbID),a(1),C("src",c.Poster,h),a(3),x(c.Title)}}var _e=()=>({backgroundImage:"url(assets/ExfHZEnXMAYGOQn2.jpg)"});function ye(t,e){if(t&1&&(r(0,"div")(1,"div",39)(2,"div",35)(3,"div",40)(4,"div",41)(5,"div",42)(6,"p",43),s(7," lunar home works"),l(8,"i",44),o()(),r(9,"p-carousel",45),f(10,Me,8,3,"ng-template",46),o()()()()()()),t&2){let c=M();a(1),d("ngStyle",k(6,_e)),a(8),d("value",c.initMovies)("numVisible",6)("numScroll",6)("circular",!1)("responsiveOptions",c.responsiveOptions)}}var Oe=()=>({backgroundImage:"url(assets/bg-8.jpg)"}),ce=(()=>{let e=class e{constructor(n,i,m){this.movieService=n,this.spaceToPlusService=i,this.utilities=m,this.initMovies=[],this.bestMovie={},this.loading=!0}ngOnInit(){this.fetchInitMovies(),this.fetchBestMovie(),this.responsiveSlide()}fetchInitMovies(){this.movieService.getInitMovies().subscribe({next:n=>{this.initMovies=n.Search},error:n=>{console.log(n)}})}fetchBestMovie(){let n="The Last Of Us",i=this.spaceToPlusService.spaceToPlus(n);this.movieService.getMovieByName(i).subscribe({next:m=>{this.bestMovie=m},error:m=>{console.log(m)}})}timeOut(){setTimeout(()=>{this.loading=!1},700)}get onLoading(){return this.utilities.getLoading}responsiveSlide(){this.responsiveOptions=[{breakpoint:"1900px",numVisible:6,numScroll:6},{breakpoint:"1600px",numVisible:5,numScroll:5},{breakpoint:"1450px",numVisible:4,numScroll:4},{breakpoint:"1230px",numVisible:3,numScroll:3},{breakpoint:"1050px",numVisible:2,numScroll:2},{breakpoint:"868px",numVisible:1,numScroll:1}]}};e.\u0275fac=function(i){return new(i||e)(p(b),p(se),p(Z))},e.\u0275cmp=u({type:e,selectors:[["app-home"]],decls:52,vars:8,consts:[["class","container page-container mb-3",4,"ngIf"],[4,"ngIf"],[1,"container","section-container","search-section"],[1,"row"],["pAnimateOnScroll","","enterClass","fadeinleft","leaveClass","fadeinright",1,"col-md-8","col-12","search-section-1","animation-duration-3000","animation-ease-in-out"],[1,"row","p-2"],[1,"col-12","col-sm-7","col-lg-9"],[1,"fs-4","fw-bold"],[1,"col-12","col-sm-5","col-lg-3","button-search"],["routerLink","search"],[1,"text-center"],[1,"col-12","text-body-tertiary"],[1,"col-md-1","col-12"],["pAnimateOnScroll","","enterClass","flipleft","leaveClass","fadeinright",1,"col-md-3","col-12","col-img","animation-duration-3000","animation-ease-in-out"],[1,"bi","bi-film","fs-1"],[1,"bg-fake","section-2"],[1,"container","section-container"],["pAnimateOnScroll","","enterClass","zoomin","leaveClass","fadeinright",1,"background-card","d-flex","gap-3","animation-duration-1000","animation-ease-in-out"],["pAnimateOnScroll","","enterClass","scalein","leaveClass","fadeinright",1,"min-card","best-movie","d-flex","animation-duration-3000","gap-3","animation-ease-in-out"],[3,"routerLink"],[3,"src"],[1,"best-movie-desc"],[1,"fs-5","text-danger-emphasis"],[1,"text-body-tertiary","pt-3"],["pAnimateOnScroll","","enterClass","fadein","leaveClass","fadeinright",1,"best-movie-section-2","d-flex","flex-column","gap-2","animation-duration-3000","animation-ease-in-out"],[1,"d-flex","gap-2","flex-column"],["href","#",1,"p-1"],[1,"space","position-relative","bg-fake","section-3"],["pAnimateOnScroll","","enterClass","fadein","leaveClass","fadeout",1,"img-section","animation-duration-1000","animation-ease-in-out",3,"ngStyle"],["pAnimateOnScroll","","enterClass","fadeinright","leaveClass","fadeoutright",1,"glass-effect-1","mini-card","d-flex","flex-column","gap-3","text-center","animation-duration-3000","animation-ease-in-out"],[1,"bi","bi-stars","fs-1"],["href","https://www.artstation.com/guweiz","target","_blank",1,"text-decoration-none"],["pAnimateOnScroll","","enterClass","flipleft","leaveClass","fadeout",1,"glass-effect-1","mini-card-2","animation-duration-2000","animation-ease-in-out"],["href","https://www.artstation.com/guweiz","target","_blank"],["width","120px","src","https://cdna.artstation.com/p/users/avatars/000/136/170/large/cd4e6acc3de9a95046a932eead960d09.jpg?1449285434","alt",""],[1,"container","page-container","mb-3"],[1,"pb-5","pt-5"],[1,"d-flex","flex-column","align-items-center","pt-5"],["width","85vw","height","50vh"],["pAnimateOnScroll","","enterClass","fadein","leaveClass","fadeout",1,"img-bg-1","animation-duration-1000","animation-ease-in-out",3,"ngStyle"],[1,"section-1-space"],["pAnimateOnScroll","","enterClass","scalein","leaveClass","fadeout",1,"glass-effect-2","rounded-4","animation-duration-2000","animation-ease-out"],[1,"ani-center","text-animation"],[1,"line","typing-animation"],[1,"bi","bi-stars","ms-2"],[3,"value","numVisible","numScroll","circular","responsiveOptions"],["pTemplate","item"],[1,"banner"],["pAnimateOnScroll","","enterClass","flipleft","leaveClass","fadeout",1,"min-card","d-flex","flex-column","text-center","animation-duration-2000","animation-ease-in-out"],[1,"desc"]],template:function(i,m){i&1&&(f(0,xe,4,3,"div",0)(1,ye,11,7,"div",1),r(2,"div")(3,"div",2)(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6)(8,"p",7),s(9,"Procurar filmes"),o()(),r(10,"div",8)(11,"a",9)(12,"p",10),s(13," clique aqui "),o()()(),r(14,"div",11),s(15," Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi fuga sed explicabo esse vero, optio labore blanditiis voluptatem corrupti laudantium veritatis consequuntur sit laborum. Eligendi earum tenetur cumque sunt temporibus molestiae porro eos unde dolorem totam aperiam aut, atque maiores suscipit similique ipsum praesentium nesciunt est aliquam repellat deserunt officiis nam. Expedita recusandae possimus rerum non at deleniti ipsum perferendis ex laudantium, atque mollitia omnis voluptatibus iure laboriosam sunt cum dignissimos ipsam aperiam reiciendis consequuntur nobis! "),o()()(),l(16,"div",12),r(17,"div",13),l(18,"i",14),o()()()(),r(19,"div",15)(20,"div",16)(21,"div",17)(22,"div",18)(23,"div")(24,"a",19),l(25,"img",20),o()(),r(26,"div",21)(27,"p",22),s(28,"Best of 2023"),o(),r(29,"p",7),s(30),o(),r(31,"p",23),s(32),o()()(),r(33,"div",24)(34,"div")(35,"p",10),s(36,"Lorem, ipsum dolor!"),o()(),r(37,"div",25)(38,"a",26),s(39,"---------"),o(),r(40,"a",26),s(41,"---------"),o()()()()()(),r(42,"div",27)(43,"div",28)(44,"div",16)(45,"div",29),l(46,"i",30),r(47,"a",31),s(48,"Z.W. GUWEIZ"),o()(),r(49,"div",32)(50,"a",33),l(51,"img",34),o()()()()()),i&2&&(d("ngIf",!m.onLoading),a(1),d("ngIf",m.onLoading),a(23),d("routerLink","movie/"+m.bestMovie.imdbID),a(1),C("src",m.bestMovie.Poster,h),a(5),g(" ",m.bestMovie.Title," "),a(2),g(" ",m.bestMovie.Plot," "),a(11),d("ngStyle",k(7,Oe)))},dependencies:[_,q,I,Q,Y,X,w],styles:[".text-animation[_ngcontent-%COMP%]{margin:0;padding:0;display:inline-block;box-sizing:border-box}.ani-center[_ngcontent-%COMP%]{display:flex;justify-content:center}.line[_ngcontent-%COMP%]{margin:2rem 0rem 0rem;box-sizing:border-box;white-space:nowrap;overflow:hidden}.typing-animation[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_typing 2s steps(40) 1s normal both!important}.min-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:140px;height:210px;margin:1rem 0rem;border-radius:.7rem;position:relative;background-size:cover;transition:all .3s}.section-2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:0}.background-card[_ngcontent-%COMP%]{justify-content:space-between;padding:1.8rem;border-radius:1.5rem;background-color:#151b22}.best-movie[_ngcontent-%COMP%]{padding:.3rem;flex-direction:row;align-items:start}.best-movie[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border:1px solid rgba(255,255,255,.551)}.best-movie-desc[_ngcontent-%COMP%]{text-align:start}.best-movie-desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:last-child){margin:0rem}.best-movie-section-2[_ngcontent-%COMP%]{justify-content:space-between;padding:1rem;background-color:#1c2832;border-radius:1rem}.best-movie-section-2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-align:center;border-radius:1rem;text-decoration:none;border:1px solid}.best-movie-section-2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#6d91c76f}.min-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{cursor:pointer;transform:scale(1.1)}.banner[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-around;align-items:center}.desc[_ngcontent-%COMP%]{padding:0rem 2rem;word-wrap:break-word;overflow-wrap:break-word}.img-section[_ngcontent-%COMP%]{height:600px;background-repeat:no-repeat;background-size:cover;background-position:top center;transition:all .5s}.img-bg-1[_ngcontent-%COMP%]{background-repeat:no-repeat;background-size:cover;background-attachment:fixed;background-position:left center;transition:all .5s}.space[_ngcontent-%COMP%]{padding-top:6rem}.mini-card[_ngcontent-%COMP%]{margin-top:2rem;padding:2rem 5rem;position:absolute;display:inline-block;border-radius:1rem;top:0%;left:20%;transform:-50%,-50%;transition:all 1s}.mini-card-2[_ngcontent-%COMP%]{padding:1rem;position:absolute;display:inline-block;border-radius:5rem;border:none;top:40%;left:25%;transform:-50%,-50%;transition:all 1s}.mini-card-2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:5rem;transition:.7s;transition-timing-function:cubic-bezier(1,-.34,0,1.34)}.mini-card-2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{transform:scale(1.2);rotate:360deg}.bg-fake[_ngcontent-%COMP%]{background-color:var(--main-color)}.section-2[_ngcontent-%COMP%]{padding:6rem 0rem}.search-section-1[_ngcontent-%COMP%]{border:2px solid #1C2832;border-radius:1.5rem;padding:0}.search-section[_ngcontent-%COMP%]{margin-top:7rem}.search-section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{margin:0}.search-section[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{padding:5rem;transition:background-color 1.5s,rotate 2.5s;transition-timing-function:cubic-bezier(1,-1,-1,1.5)}.search-section[_ngcontent-%COMP%]   .col-img[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;background-color:#1c2832;border-radius:1.5rem;transition:all 1.5s;transition-timing-function:cubic-bezier(1,-1,-1,1.5)}.button-search[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.button-search[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{background-color:#e0e0e0;border:1px solid white;border-radius:1rem;padding:.3rem;color:#05070a;transition:all .3s}.button-search[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover{background-color:#6d91c76f;border-radius:1rem;border:1px solid rgba(var(--bs-link-color-rgb),var(--bs-link-opacity, 1));padding:.3rem;color:rgba(var(--bs-link-color-rgb),var(--bs-link-opacity, 1))}@keyframes _ngcontent-%COMP%_typing{0%{width:0}to{width:9.4em}}@keyframes _ngcontent-%COMP%_blinkCursor{0%{border-right-color:#ffffffbf}to{border-right-color:transparent}}@media (min-width: 1200px){.search-section[_ngcontent-%COMP%]:hover   .col-img[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{background-color:transparent;border:1px solid rgba(109,145,199,.4352941176);border-radius:100%;rotate:360deg}.search-section[_ngcontent-%COMP%]:hover   .col-img[_ngcontent-%COMP%]{background-color:transparent}}@media (max-width: 1200px){.background-card[_ngcontent-%COMP%]{flex-direction:column;align-items:center}.best-movie-section-2[_ngcontent-%COMP%]{align-self:end}}@media (max-width: 768px){.container[_ngcontent-%COMP%]{padding:0rem 1rem!important}.img-bg-1[_ngcontent-%COMP%]{background-position:20%;background-attachment:scroll}.mini-card[_ngcontent-%COMP%]{padding:2rem;top:0%;left:5%}.best-movie-section-2[_ngcontent-%COMP%]{text-align:center;align-self:center}.mini-card-2[_ngcontent-%COMP%]{top:70%;left:5%}.best-movie[_ngcontent-%COMP%]{flex-direction:column;align-items:center}.best-movie-desc[_ngcontent-%COMP%]{margin-top:1rem;text-align:center}.search-section[_ngcontent-%COMP%]{background-color:#151b22}.search-section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{padding:2rem 0rem}.search-section[_ngcontent-%COMP%]   .col-img[_ngcontent-%COMP%]{margin-top:2rem}}@media (max-width: 380px){.min-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:130px;height:200px}.background-card[_ngcontent-%COMP%]{padding:1.5rem 1rem}.search-section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:180px}}"]});let t=e;return t})();function Pe(t,e){if(t&1&&(r(0,"div",2)(1,"div",3),l(2,"img",4),o(),r(3,"div",5)(4,"p",6),s(5),o(),r(6,"div",7)(7,"p"),s(8),o(),r(9,"p"),s(10),o(),r(11,"p"),s(12),o(),r(13,"p"),s(14),o(),r(15,"p"),s(16),o(),r(17,"p"),s(18),o()()()()),t&2){let c=M();a(2),C("src",c.movie.Poster,h),a(3),x(c.movie.Title),a(3),x(c.movie.Year),a(2),x(c.movie.Genre),a(2),g("imdb note: ",c.movie.imdbRating,""),a(2),x(c.movie.Plot),a(2),g("Atores: ",c.movie.Actors,""),a(2),g("Diretor: ",c.movie.Director,"")}}var le=(()=>{let e=class e{constructor(n,i,m){this.movieService=n,this.route=i,this.router=m,this.movie={}}ngOnInit(){let n=this.route.snapshot.paramMap.get("imdbID");this.fetchMovie(n)}fetchMovie(n){this.movieService.getMovieById(n).subscribe({next:i=>{this.movie=i},error:i=>{console.log(i),this.router.navigateByUrl("")}})}};e.\u0275fac=function(i){return new(i||e)(p(b),p(H),p(W))},e.\u0275cmp=u({type:e,selectors:[["app-movie"]],decls:2,vars:1,consts:[[1,"container","space"],["class","movie-details row",4,"ngIf"],[1,"movie-details","row"],[1,"col-md-4","col-sm-12"],[1,"img-fluid","rounded-3",3,"src"],[1,"col-md-8","col-sm-12"],[1,"fs-2"],[1,"text-secondary-emphasis"]],template:function(i,m){i&1&&(r(0,"div",0),f(1,Pe,19,8,"div",1),o()),i&2&&(a(1),d("ngIf",m.movie.Poster))},dependencies:[_],styles:[".space[_ngcontent-%COMP%]{padding:6rem 0rem}.movie-details[_ngcontent-%COMP%]{text-align:center}"]});let t=e;return t})();var de=[{id:"1",name:"movie"},{id:"2",name:"series"},{id:"3",name:"episode"}];var pe=(()=>{let e=class e{constructor(n,i){this.formBuilder=n,this.movieService=i,this.onFiltered=new D,this.filteredResults=[],this.types=de,this.movies=[]}ngOnInit(){this.formFilter=this.formBuilder.group({name:[null],year:"",type:""})}onSubmit(){let n={name:this.formFilter.controls.name.value?"&s="+this.formFilter.controls.name.value:"",year:this.formFilter.controls.year.value?"&y="+this.formFilter.controls.year.value:"",type:this.formFilter.controls.type.value?.name?"&type="+this.formFilter.controls.type.value.name:""};this.onFiltered.emit(n)}onClean(){this.formFilter.reset()}};e.\u0275fac=function(i){return new(i||e)(p(oe),p(b))},e.\u0275cmp=u({type:e,selectors:[["app-movie-filter"]],outputs:{onFiltered:"onFiltered"},decls:30,vars:3,consts:[[1,"container-modified",3,"formGroup"],[1,"title","d-flex","justify-content-between","pt-3","mb-3"],[1,"fs-5","fw-bold"],[1,"bi","bi-search","pe-2"],[1,"btn","btn-sm","btn-outline-secondary","text-center",3,"click"],[1,"bi","bi-eraser-fill","p-2"],[1,"pe-2"],[1,"form-items","row","mb-3"],[1,"col-lg-12","mb-3"],["for","name",1,"form-label"],[1,"text-body-tertiary"],["type","text","formControlName","name","id","name",1,"form-control"],[1,"col-lg-8","col-sm-12","mb-3"],["for","year",1,"form-label"],["type","text","formControlName","year","formControlName","year","id","year",1,"form-control"],[1,"col-lg-4","col-sm-12","mb-3"],[1,"form-item","d-flex","flex-column"],["for","float-label",1,"form-label"],["formControlName","type","optionLabel","name","id","float-label",3,"showClear","options"],[1,"row","mb-5"],[1,"col-sm-12","btn-search"],[1,"btn","btn-sm","btn-primary",3,"click"]],template:function(i,m){i&1&&(r(0,"form",0)(1,"div",1)(2,"div",2),l(3,"i",3),s(4,"Procurar filmes"),o(),r(5,"div")(6,"button",4),y("click",function(){return m.onClean()}),l(7,"i",5),r(8,"span",6),s(9,"Limpar"),o()()()(),r(10,"div",7)(11,"div",8)(12,"label",9),s(13,"T\xEDtulo "),r(14,"span",10),s(15,"(em ingl\xEAs)"),o()(),l(16,"input",11),o(),r(17,"div",12)(18,"label",13),s(19,"Ano"),o(),l(20,"input",14),o(),r(21,"div",15)(22,"div",16)(23,"label",17),s(24,"Tipo"),o(),l(25,"p-dropdown",18),o()()(),r(26,"div",19)(27,"div",20)(28,"button",21),y("click",function(){return m.onSubmit()}),s(29," Pesquisar "),o()()()()),i&2&&(d("formGroup",m.formFilter),a(25),d("showClear",!1)("options",m.types))},dependencies:[te,J,K,ee,ie,ne,re],styles:[".btn-search[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-direction:column}.container-modified[_ngcontent-%COMP%]{margin:0 auto;width:50%!important}@media (max-width: 992px){.container-modified[_ngcontent-%COMP%]{width:100%!important}}"]});let t=e;return t})();var ke=t=>["/movie",t];function we(t,e){if(t&1&&(r(0,"div",4)(1,"div",5)(2,"a",6),l(3,"img",7),o(),r(4,"small",8),s(5),o()()()),t&2){let c=e.$implicit;a(2),d("routerLink",z(3,ke,c.imdbID)),a(1),C("src",c.Poster,h),a(2),g(" ",c.Title," ")}}var ue=(()=>{let e=class e{constructor(){this.unitsList=[],this.totalResults=""}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=u({type:e,selectors:[["app-movie-list"]],inputs:{unitsList:"unitsList",totalResults:"totalResults"},decls:5,vars:2,consts:[["pAnimateOnScroll","","enterClass","fadein","leaveClass","fadeout",1,"img-background","animation-duration-3000","animation-ease-in-out"],[1,"text-secondary","mb-3"],[1,"row"],["class","col text-center",4,"ngFor","ngForOf"],[1,"col","text-center"],["pAnimateOnScroll","","enterClass","scalein","leaveClass","fadeout",1,"d-flex","flex-column","gap-2","min-card","animation-duration-3000","animation-ease-in-out"],[3,"routerLink"],[3,"src"],[1,"pb-1"]],template:function(i,m){i&1&&(r(0,"div",0)(1,"p",1),s(2),o(),r(3,"div",2),f(4,we,6,5,"div",3),o()()),i&2&&(a(2),g("Exibindo 10 de ",m.totalResults," resultados"),a(2),d("ngForOf",m.unitsList))},dependencies:[$,I,w],styles:[".min-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:150px;margin:1rem 0rem;border-radius:.7rem;position:relative;background-size:cover;transition:all .3s}.min-card[_ngcontent-%COMP%]{transition:all .3s;padding:.5rem;margin-bottom:1rem;border-radius:.3rem}.min-card[_ngcontent-%COMP%]:hover{transform:scale(1.4)}.img-background[_ngcontent-%COMP%]{background-repeat:no-repeat;background-size:cover;padding:2.5rem;background-attachment:fixed;background-position:left center;transition:all .5s}"]});let t=e;return t})();function Ee(t,e){if(t&1&&l(0,"app-movie-list",4),t&2){let c=M();d("unitsList",c.unitsList)("totalResults",c.total)}}var ge=(()=>{let e=class e{constructor(n){this.movieService=n,this.showList=new T(!1),this.unitsList=[],this.total=""}ngOnInit(){}showListComp(n){this.movieService.getMoviesBySearch(n).subscribe({next:i=>{this.unitsList=i.Search,this.total=i.totalResults},error:i=>{console.log(i)}}),this.showList.next(!0)}};e.\u0275fac=function(i){return new(i||e)(p(b))},e.\u0275cmp=u({type:e,selectors:[["app-movie-management"]],decls:5,vars:3,consts:[[1,"container","page-container"],[1,"section-1-space"],[3,"onFiltered"],[3,"unitsList","totalResults",4,"ngIf"],[3,"unitsList","totalResults"]],template:function(i,m){i&1&&(r(0,"div",0)(1,"div",1)(2,"app-movie-filter",2),y("onFiltered",function(ve){return m.showListComp(ve)}),o(),f(3,Ee,1,2,"app-movie-list",3),B(4,"async"),o()()),i&2&&(a(3),d("ngIf",R(4,1,m.showList)))},dependencies:[_,pe,ue,V]});let t=e;return t})();var Fe=[{path:"",component:ce},{path:"movie/:imdbID",component:le},{path:"search",component:ge}],fe=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=S({type:e}),e.\u0275inj=P({imports:[F.forChild(Fe),F]});let t=e;return t})();var pt=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=S({type:e}),e.\u0275inj=P({imports:[U,ae,fe]});let t=e;return t})();export{pt as MovieModule};