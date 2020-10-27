(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b95b7"],{3334:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._m(0),e._m(1),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"wrapper-1"},[a("div",{staticClass:"cols paddingFor"},[a("el-collapse",{staticStyle:{width:"100%"},attrs:{align:"middle"},on:{change:e.handleChange},model:{value:e.activeNames,callback:function(t){e.activeNames=t},expression:"activeNames"}},[a("el-collapse-item",{attrs:{title:"Background",name:"1"}},[a("div",{attrs:{align:"left"}},[a("div",[e._v(" In addition, during the first decade of synthetic biology, most of the research focused on single-module design.Integrating different single modules to perform more complex functions is another key. At present, many excellent databases (CATH, SCOP/SCOP2, Uniprot) have detailed and accurate records of the supersecondary structure domain of proteins, ")]),a("img",{attrs:{src:"/assets/images/scop.png"}}),a("img",{attrs:{src:"/assets/images/scope.png"}}),a("img",{attrs:{src:"/assets/images/cath.png"}}),a("img",{attrs:{src:"/assets/images/pdb.png"}}),a("img",{attrs:{src:"/assets/images/uniport.jpg"}}),a("div",[e._v(" and we realize that it may be feasible to study proteins with more complex functions by using domain as a module.At the same time, the research work of domain will also play an important role in the development of synthetic biology in the future. The structural domain research can not only provide appropriate bricks for the design of new proteins, but also Clues to the evolution of life ")])])]),a("el-collapse-item",{attrs:{title:"Project",name:"2"}},[a("div",{attrs:{align:"left"}},[e._v(" CPD3DS integrates CATH and SCOP/SCOP2 , in order to provide as comprehensive and detailed structure domain information as possible. At present, we have achieved remarkable results in four aspects: design ideas originality , data integrity, content accuracy and user-friendliness "),a("br"),a("br"),a("h6",[e._v("1. Model")]),a("br"),e._v(" Initiated domain classificationaccording to the shape of domain through 3Dzd & K-means "),a("br"),a("br"),a("h6",[e._v("2.Rebuild our database")]),a("br"),e._v(" Through Uniprot, CATH, SCOP/SCOP2 and PDB, we have integrated domain division, related functions and probability combination into our own project website, so as to form a complete system of domain shape division, sequence, structure, function and evolutionary relationship. "),a("br"),a("br"),a("h6",[e._v("3. We use an authoritative database")]),a("br"),e._v(" recognized by the synthetic biology community. Their strict review system and supporting materials ensure the accuracy of the content on our website. "),a("br"),a("br"),a("h6",[e._v("4. We use We strive to make CPD3DS")]),a("br"),e._v(" a more integrated and user-friendly database that provides synthetic biologists with long-term, stable data updates and search services. Currently, the team has developed very practical functions on CPD3DS and plan to develop it further: in the future, it will provide data support services for other software teams. At present, We have two ways to design group team ( USTC , Tongji) provides search and data support services, the team received positive feedback. ")])]),a("el-collapse-item",{attrs:{title:"Function",name:"4"}},[a("div",{attrs:{align:"left"}},[a("p",[e._v(" For individual users, CPD3DS provides diversified services. They can view related information about each type of domain we classified based on shape: such as sequence, 3D model, function, and combination. In addition, it allows users to jump to the database of the data source via a connection. ")]),a("br"),a("p",[e._v(" For the research team, CPD3DS provides data support services. Users can download all data and all models in our database. We also deployed a web application on our server. ")])])]),a("el-collapse-item",{attrs:{title:"Design",name:"5"}},[a("div",{attrs:{align:"left"}},[a("p",[e._v(" In order to describe our domain module accurately and in detail , our project integrates 5 databases, including "),a("a",{attrs:{href:"https://www.uniprot.org/"}},[e._v("UniProt")]),e._v(" , "),a("a",{attrs:{href:"http://cathdb.info/"}},[e._v("CATH")]),e._v(" ,"),a("a",{attrs:{href:"http://scop.mrc-lmb.cam.ac.uk/"}},[e._v("SCOP")]),e._v(" /"),a("a",{attrs:{href:"http://scop2.mrc-lmb.cam.ac.uk/"}},[e._v("SCOP2")]),e._v(" , "),a("a",{attrs:{href:"https://www.rcsb.org/"}},[e._v("PDB")]),e._v(" . It can be said that all the information contained in CPD3DS has been verified by experiments, thus ensuring the high reliability of the data. "),a("br"),a("br")]),a("h4",[e._v("1. Select the target database")]),a("br"),e._v(" The types that belong to the protein database are: UniProtKB , gene product annotation , PDB , CATH , SCOP/SCOP2. "),a("br"),a("br"),a("h5",[e._v("UniProtKB")]),a("br"),a("a",{attrs:{href:"http://www.uniprot.org/"}},[e._v("http://www.uniprot.org/")]),a("p",[e._v("Its three-level database:")]),a("p",[e._v(" 1.UniPrac : A large number of protein sequences included in all UniProt database sub-libraries. ")]),a("p",[e._v(" 2. UniRef : Summarize several major databases of UniProt and repeat the series after removal. ")]),a("p",[e._v(" 3. UniProtKB: Databases with detailed annotations and links to other databases are divided into UniProtKB , Swiss-Prot , UniProtKB and TrEMBL . Among them , the data in Swiss-Prot is obtained from the experiment, and the annotation is completed after manual inspection, and TrEMBL is the annotation completed automatically. ")]),a("br"),a("h5",[e._v("PDB")]),a("br"),a("a",{attrs:{href:"http://www.rcsb.org/"}},[e._v("http://www.rcsb.org/")]),a("p",[e._v(" The search part displays the basic information about the protein. If you want to see other information, download a .pdb file in PDB format . The file can be opened with Notepad. The file includes: molecular category, keywords, method of determining structure, and primary structure information , Amino acid sequence, modification of standard residues, secondary structure, chemical bonds between residues, 3D coordinates (atomic coordinates), atomic bond information, etc. CATH http://cathdb.info/ Belongs to the secondary protein structure library. SCOP/SCOP2 http://scop.mrc-lmb.cam.ac.uk/scop2/0.html Belongs to the secondary protein structure database. The classification of SCOP and S COP2 is based on four levels: class (secondary structure component), family (spatial geometric relationship), superfamily (distant protein evolution relationship) and folding (close protein evolution relationship). gene product annotation ")]),a("br"),a("h5",[e._v("CATH")]),a("br"),a("a",{attrs:{href:"http://cathdb.info/"}},[e._v("http://cathdb.info/")]),a("p",[e._v("Belongs to the secondary protein structure library.")]),a("br"),a("h5",[e._v("SCOP/SCOP2")]),a("br"),a("a",{attrs:{href:"http://scop.mrc-lmb.cam.ac.uk/scop2/0.html"}},[e._v("http://scop.mrc-lmb.cam.ac.uk/scop2/0.html")]),a("p",[e._v(" Belongs to the secondary protein structure database. The classification of SCOP and S COP2 is based on four levels: class (secondary structure component), family (spatial geometric relationship), superfamily (distant protein evolution relationship) and folding (close protein evolution relationship).gene product annotation ")]),a("br"),a("h4",[e._v("2. Data Integration")]),a("br"),a("p",[e._v(" In order to enable users to scientifically utilize the domain we have divided, we make full use of the current mature database resources. Considering the scientific nature of protein domain division, we refer to the domain labels of CATH and SCOP. We crawled the functional annotations on Go that are related to our domain classification so that you can find the functions that domain might be involved in.In addition, we also examined the binding score between different shape classifications and gave the recommended binding scheme, so as to avoid the situation that the selected two types of proteins could not bind and wasted financial and material resources.(filter) ")]),a("br"),a("h4",[e._v("3. De-redundancy")]),a("br"),a("p",[e._v(" We downloaded all the PDB files on the PDB database and de-redacted them by cd-hit [1,2,3,4,5,6]. The input file of CD-HIT only has a FASTA format file. Generally speaking, THE input file of CD-HIT is to cluster the gene or protein sequences of several samples, so the sequences of these samples need to be summarized together as the input file. Cd-hit has two output files: one is a FASTA file that contains only all sequences that represent sequences (i.e., sequences without redundancy);The other is a cluster information file ending in.clSTR, in the following format. ")]),a("img",{attrs:{src:"/assets/images/fasta_format.png",width:"70%"}}),a("br"),a("p",[e._v(' The one beginning with ">" is a clustering group. Each group is arranged by sequence number. As shown in the figure above, there are 5 cluster sequences in Cluster 1 group . Each cluster sequence has a percentage or "*" , the percentage represents the similarity between the sequence and the representative sequence, and "*" represents the sequence is the representative sequence of the cluster. ')]),a("p",[e._v(" Preliminary de-redundancy uses 80% similarity as the basic parameter to perform de-redundancy operation, and 33,455 de-redundant data are obtained . ")]),a("br"),a("h5",[e._v("4. Data Extraction")]),a("br"),a("p",[e._v(" Since there was a lot of garbage in the PDB before extraction, we did a preliminary extraction using a Python script to get the Atom information and the HeTATm (residue - equivalent to Atom) information that would be useful for the project.The extracted file effect is as follows: ")]),a("br"),a("img",{attrs:{src:"/assets/images/file_effect.png",height:"50%"}}),a("br"),a("br"),a("h5",[e._v("5. Feature extraction algorithm")]),a("br"),a("p",[e._v(" The 3D-Zernike descriptor ( 3DZD ) can be used to effectively compare the surface shapes of single chains, single domains or single complexes in the latest protein database ( PDB ) with all protein structures. ")]),a("p",[e._v(" The 3D-Zernike descriptor ( 3DZD ) is a combination of coefficients calculated from a set of well-defined orthogonal 3D basic polynomials that approximate a given 3D function (a grid of discrete surfaces). 3DZD has various ideal characteristics when applied to protein surface shape: ")]),a("p",[e._v(" Rotation invariance: protein comparison does not require prior structural comparison. ")]),a("p",[e._v(" Tightness: The surface of a protein can be closely represented as an eigenvector with only 121 Numbers (called invariant). These vectors can be compared by calculating euclide distances in a very short period of time, allowing for rapid shape retrieval. ")]),a("p",[e._v(" Layered resolution: The invariant of lower resolution is also part of the higher resolution. For example, the first 12 numbers in 121 invariants represent the same protein at a lower resolution. ")]),a("p",[e._v(" By calculating the Euclidean distance of 121 eigenvector of two proteins, the similarity of the shapes of the two proteins can be judged. ")]),a("br"),a("h4",[e._v(" 5. Clustering ")]),a("br"),a("h5",[e._v("Introduction to K-means clustering algorithm")]),a("br"),a("p",[e._v(" Due to its excellent speed and good scalability, K-means clustering algorithm can be regarded as the most famous clustering method. K-means algorithm is a process of repeatedly moving the center point of a class. The center point of the class also known as centroids is moved to the average position of its containing members, and then its internal members are re-divided. ")]),a("p",[e._v(" The K-means algorithm has many good characteristics that make it widely used in many fields. ")]),a("p",[e._v(" First, the algorithm can prune the tree to determine the classification of some samples according to the categories of fewer known clustering samples. ")]),a("p",[e._v(" Secondly, in order to overcome the inaccuracy of clustering of a small number of samples, the algorithm itself has an optimization iteration function. On the obtained clusters, iterative correction pruning is performed again to determine the clustering of some samples, which optimizes the unreasonable part of the initial supervised learning sample classification. ")]),a("p",[e._v(" Thirdly, the total clustering time complexity can be reduced due to only small samples. Due to the advantages of Kmeans itself, we think it is suitable for our project. ")]),a("br"),a("b",[e._v("After the domain is classified according to the surface shape, we consider that what users need may not only be our shape classification, but the same domain sequence information, chemical properties, and related functions are also essential. ")]),a("br"),a("br"),a("h5",[e._v("Sequence information")]),a("br"),a("p",[e._v(" Our sequence information mainly comes from PDB database, CATH database, SCOP and SCOP2 . Our domain division is based on the structure domain information recorded in the CATH database, SCOP and SCOP2 , and the original files come from the PDB database. ")]),a("br"),a("h5",[e._v("Function information crawling")]),a("br"),a("p",[e._v(" In order to associate the function of the protein with the domain, we crawled the function tag corresponding to GeneProduct Annotation in the protein Annotation page on the PDB website.Then, the probability of the occurrence of different function tags is counted in domain class as unit, and the function tags with high probability are extracted. ")]),a("br"),a("h5",[e._v("Combined score recommendation")]),a("br"),a("p",[e._v(" The combined probability statistics are performed for the entries in the domain database after the redundancy is removed.The aim is to guide the possibility of binding domains of different classes during protein design.The probability of each class combining with other class is calculated.The above probability is normalized to obtain a 100*100 binding graph, where the darker the color is, the more likely domain binding is in the corresponding class of rows and columns. ")]),a("br"),a("img",{attrs:{src:"/assets/images/combined.jpg"}}),a("br"),a("br"),a("p",[e._v(" Similarly, we also put the combination probability of each class with other class domains into the database, and users can search the domain class name and get the domain class name with high combination probability. ")]),a("br"),a("h5",[e._v("Domain model processing")]),a("br"),a("p",[e._v(" We also designed a set of domain building block modules similar to building blocks that can be assembled . ")]),a("br"),a("img",{attrs:{src:"/assets/images/combined.png"}}),a("br"),a("br"),a("h4",[e._v("Protein splitting")]),a("br"),a("p",[e._v(" We consider that users may need to understand the structure and composition of natural proteins in protein design, so domains of natural proteins need to be found in our library.Therefore, we have implemented representative domain mapping for different domains, namely, similar domains in natural proteins are replaced by representative domains to ensure the integrity and simplicity of data. ")])])]),a("el-collapse-item",{attrs:{title:"Search",name:"6"}},[a("div",{attrs:{align:"left"}},[a("p",[e._v(" In order to improve the user experience, CPD3DS provides a centralized search method. Multiple IDs (such as PDB_ID , function name, CATH_ID , SCOP_ID , PDB name) and functions of doamin, or other keywords can be searched for the corresponding domain. In addition, CPD3DS also provides a sequence matching tool (BLAST) , which the FASTA sequence can be fed into and matched directly with domain in our library . ")]),a("br"),a("h5",[e._v("Keyword search")]),a("br"),a("p",[e._v("Keyword searcn method")]),a("br"),a("h5",[e._v("ID query")]),a("br"),a("p",[e._v(" CPD3DS supports multiple database ID retrieval methods, enabling users to obtain domain information in multiple ways and view data from multiple angles. ")]),a("br"),a("h5",[e._v("Cloud database service")]),a("br"),a("p",[e._v(" Our entire project adopts the strategy of local server and cloud database storage. These files are stored in the Amazon S3 cloud database service. The cloud database ensures the safety of local projects and makes it easier to provide data support services to other teams. We allow users to download the domain data of the entire database and provide files in FASTA format and PDB format. For the entire database, we provide data download in SQL , CSV and XML formats. Users can create the same database through them. The user can also download a file that he likes, and we provide a related download link in each displayed record. ")])])]),a("el-collapse-item",{attrs:{title:"About",name:"7"}},[a("div",{attrs:{align:"left"}},[a("p",[e._v(" In order to make CPD3DS more user-friendly, we specially designed a guide homepage and top navigation bar. Screen adaptations are designed for different devices. On the search results page, we designed side navigation and filtering modeling for NCBI PubMed and UniProt . Make every effort to create a smooth user experience. In addition, we use Bootstrap Response Framework and other plug-ins on the front end to design web responses to meet the needs of users for mobile devices. Front-end VUE , back-end spring , php ")]),a("br"),a("h4",[e._v("The website design takes VUE as the basic framework")]),a("br"),a("a",[e._v("Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.")]),a("h5",[e._v("1. Small")]),a("br"),a("p",[e._v(" The success of JavaScript framework depends on its size. The smaller the size is, the more it will be used. One of the greatest advantages of Vue.js is its small size. The size of this framework is 18–21KB and it takes no time for the user to download and use it. ")]),a("br"),a("h5",[e._v("2. Easy to Understand")]),a("br"),a("p",[e._v(" One of the reasons for the popularity of this framework is that it is quite easy to understand. The user can easily add Vue.js to his web project because of its simple structure. It has well defined architecture for keeping your data, life-cycle methods and custom methods separate. It also has some great features like watchers, computed properties and directives which make process of building a modern web application a breeze. Both the small as well as large scale web applications can be developed through this framework which saves a lot of time. ")]),a("br"),a("h5",[e._v("3. Simple Integration")]),a("br"),a("p",[e._v(" Vue.js is also popular among the web developers because it facilitates them to integrate with the existing applications. This is because it is based on JavaScript framework and can be integrated into other applications built on JavaScript. You can go ahead and add Vue.js CDN and start using it. Most of the third party vue components and libraries are also available and supported with Vue.js CDN. You don't necessarily need to setup node and npm to start using Vue.js. This means that it is useful for developing new web applications as well as altering the pre-existing applications. You can also use it as a great jQuery Replacement 😉. ")]),a("br"),a("h5",[e._v("4. Flexibility")]),a("br"),a("p",[e._v(" A great deal of flexibility is another advantage of Vue.js. It allows the user to write his template in HTML file, JavaScript file, and pure JavaScript file using virtual nodes. This flexibility also makes it easy to understand for the developers of React.js, Angular.js, and any other new JavaScript framework. When it comes to using the Vue.js. It's also very easy to add and work with tools like Templating Engines(e.g. pug), CSS Pre-processors(e.g. sass, less, stylus etc.) and Type checking tools like Typescript. ")]),a("br"),a("h5",[e._v("5. Two-Way Communication")]),a("br"),a("p",[e._v(" Vue.js facilitates two way communications because of its MVVM architecture which makes it quite easy to handle HTML blocks. It seems very close to Angular.js which also speeds up HTML blocks. This feature is also termed as 2-Way Data Binding, what that means is whatever changes you make in your UI is passed to your data and changes done in your data is reflected in your UI. Vue.js is also called Reactive because it reacts to whenever your data in changed. This is very different when compared to Libraries like React.js which only supports one way communication. ")]),a("br"),a("h5",[e._v("6. Great Tooling")]),a("br"),a("p",[e._v(" Vue.js has great tooling.The new Vue CLI i.e. 3.x is arguably one of the best tool for a Javascript Framework. It allows you to kickstart new Project with things like Routing, State Store, Linting, Unit Testing, CSS Pre-processors, Typescript, PWA etc built in. You can also save your presents to use in other projects in the future. It also allows you to add features down the road. Vue CLI also provides a UI for managing your projects. ")]),a("br"),a("h5",[e._v("7. Best of both worlds")]),a("br"),a("p",[e._v(" As you may have heard, Vue.js is inspired by Two already great web frameworks i.e. React and Angular. It takes best parts of both the frameworks. For example, just like React it is component based and uses Virtual DOM which makes it incredibly fast. And like Angular it has Directives and 2-Way Data Binding. It's not a library(unlike React.js) and not a full fledge framework(unlike Angular). It has really great balance of features that come out of the box and It's incredibly easy to add more along the way like Routing and State Management. We at Inkoop use this great framework in our projects to build fast and interactive web applications and We hope this article helps you learn more about Vue.js and inspired you to build something with it. ")]),a("br"),a("h4",[e._v("The backend is designed with SpringCloud")]),a("br"),a("p",[e._v(" Spring Cloud is an ordered collection of a series of frameworks. It uses the development convenience of Spring Boot to cleverly simplify the development of distributed system infrastructure, such as service discovery registration, configuration center , message bus, load balancing, circuit breakers, data monitoring, etc., all can be done in Spring Boot development style To one-click launch and deployment. Spring Cloud does not repeatedly manufacture wheels. It just combines the relatively mature and practical service frameworks developed by various companies, and repackages them through the Spring Boot style to shield out the complex configuration and implementation principles, and finally develop The authors set aside a set of distributed system development kits that are easy to understand, easy to deploy and easy to maintain. ")]),a("p",[e._v(" At the same time, we adopted Swagger2 design interface documentation package shelf, swagger2 is a standardized and complete framework , with in generation, description, and call visualization Restful style web service. I have designed the interface description of each document to make the interface, convenient front-end view, the use of the test. ")])])]),a("el-collapse-item",{attrs:{title:"Reference",name:"8"}},[a("div",{attrs:{align:"left"}},[a("br"),a("h5",[e._v("CD-hit references")]),a("br"),a("p",[e._v(" [1]Weizhong Li, Adam Godzik, Cd-hit: a fastprogram for clustering and comparing large sets of protein or nucleotide sequences, Bioinformatics, Volume 22, Issue 13, 1 July 2006, Pages1658–1659, "),a("a",{attrs:{href:"https://doi.org/10.1093/bioinformatics/btl158"}},[e._v("https://doi.org/10.1093/bioinformatics/btl158")])]),a("p",[e._v(" [2]Ying Huang, Beifang Niu, Ying Gao, LiminFu, Weizhong Li, CD-HIT Suite: a web server for clustering and comparing biologicalsequences, Bioinformatics, Volume 26, Issue 5, 1 March 2010, Pages68 0–682, "),a("a",{attrs:{href:"https://doi.org/10.1093/bioinformatics/btq003"}},[e._v("https://doi.org/10.1093/bioinformatics/btq003")])]),a("p",[e._v(" [3]Ying Huang, Beifang Niu, Ying Gao, Limin Fuand Weizhong Li. CD-HIT Suite: a web server for clustering and comparing biological sequences . Bioinformatics, 2010(26): 680-682. ")]),a("p",[e._v(" [4]Weizhong Li and Adam Godzik. Cd-hit: a fastprogram for clustering and comparing large sets of protein or nucleotide sequences. Bioinformatics, 2006(22): 1658-1659. ")]),a("p",[e._v(" [5]Weizhong Li, Lukasz Jaroszewski and AdamGodzik. Tolerating some redundancy significantly speeds up clustering of largeprotein databases. Bioinformatics, 2002(18): 77-82. ")]),a("p",[e._v(" [6]Weizhong Li, Lukasz Jaroszewski and AdamGodzik. Clustering of highly homologous sequences to reduce the size of largeprotein datab ases. Bioinformatics, 2001(17): 282-283. ")]),a("br"),a("h5",[e._v("3DZD")]),a("br"),a("p",[e._v(" [7]David La, Juan Esquivel-Rodriguez, Vishwesh Venkatraman, Bin Li, Lee Sael, Steven Ueng, Steven Ahrendt, and Daisuke Kihara. 3D-SURFER: software for high throughput protein surface comparison and analysis. B ioinformatics 25: 2843-2844 (2009) ")]),a("br"),a("h5",[e._v("Kmeans")]),a("br"),a("p",[e._v(" [8] MacQueen, J. Some Methods for Classification and Analysis of MultiVariate Observations[C]// Proc of Berkeley Symposium on Mathematical Statistics & Probability. 1965. ")]),a("br"),a("h5",[e._v("model")]),a("br"),a("p",[e._v(" [9]LSculpt.Download from "),a("a",{attrs:{href:"https://github.com/RomkoSI/lsculpt"}},[e._v("https://github.com/RomkoSI/lsculpt")]),e._v(". ")]),a("br"),a("h5",[e._v("Physical and chemical properties")]),a("br"),a("p",[e._v(' [10]Stothard, Paul. "The sequence manipulation suite: JavaScript programs for analyzing and formatting protein and DNA sequences." BioTechniques 28 6 (2000): 1102, 1104. ')]),a("br"),a("h5",[e._v("Blast")]),a("br"),a("p",[e._v(' [11]McGinnis, Scott, and Thomas L. Madden. "BLAST: at the core of a powerful and diverse set of sequence analysis tools." Nucleic acids research 32.suppl_2 (2004): W20- W25. ')]),a("br"),a("h5",[e._v("Database")]),a("br"),a("p",[e._v(" [12]Sillitoe I, Dawson N, Lewis TE, et al.CATH: expanding the horizons of structure-based functional annotations forgenome sequences. Nucleic Acids Res. 2019;47(D1):D280-D284.doi:10.1093/nar/ gky1097 ")]),a("p",[e._v(" [13]Antonina Andreeva, Dave Howorth, Cyrus Chothia, Eugene Kulesha, Alexey Murzin, SCOP2 prototype: a new approach to protein structu re mining. (2014) Nucl. Acid Res., 42 (D1): D310-D314 ")]),a("p",[e._v(" [14]Antonina Andreeva, Eugene Kulesha, Julian Gough, Alexey Murzin, TheSCOP database in 2020: expanded classification of representative family andsuperfamily domains of known protein structures. (2020) Nucl. Acid Res., 48(D1): D376-D382 ")]),a("p",[e._v(" [15] Goodsell DS. The Protein Data Bank[M]// Atomic Evidence. Springer International Publishing, 2016. ")]),a("p",[e._v(" [16]UniProt Consortium T UniProt: the universal protein knowledgebase. Nucleic Acids Res. 2018;46:2699. doi: 10.1093/ nar/gky092. ")])])])],1)],1)])])]),a("h1")])},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"page-title-area d-flex align-items-center bg_cover",staticStyle:{"background-image":"url(assets/images/tutorial.png)"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"page-title-item text-center"},[a("h3",{staticClass:"title"},[e._v("Tutorial")]),a("nav",{attrs:{"aria-label":"breadcrumb"}},[a("ol",{staticClass:"breadcrumb"},[a("li",{staticClass:"breadcrumb-item"},[a("a",{attrs:{href:"/"}},[e._v("Home")])]),a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[a("a",{attrs:{href:"/tutorial"}},[e._v(" Tutorial ")])])])])])])])]),a("div",{staticClass:"page-title-shape"},[a("img",{attrs:{src:"assets/images/banner-shape.png",alt:"shape"}})])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"product-details-area pt-30 pb-90"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6 col-md-5"},[a("div",{staticClass:"product-details-thumb mt-35"},[a("img",{attrs:{src:"assets/images/3dzd.png",alt:"product details"}})]),a("div",{staticClass:"blog-thumb-list m-auto"})]),a("div",{staticClass:"col-lg-6 col-md-7"},[a("div",{staticClass:"product-details-content mt-30"},[a("div",{staticClass:"product-details-title"},[a("h4",{staticClass:"title"},[e._v("CPD3DS")])]),a("div",{staticClass:"product-details-review d-flex"},[a("span")]),a("div",{staticClass:"product-details-con"},[a("p",{attrs:{"font-size:19px":""}},[e._v(" Difficulties increase as synthetic biology networks expand, limiting the ability to design more complex systems.There are challenges at every step of the way, from the characterization of biological elements to the design and construction of systems.The effective integration of current research results of synthetic biology is a key step to promote its development.We note that most of the current approaches to protein design are de novo synthesis, requiring targeted modifications or resets of amino acid sequences that require corresponding modifications and resets of DNA.The workload of this approach is undoubtedly huge. In addition, during the first decade of synthetic biology, most of the research focused on single-module design.Integrating different single modules to perform more complex functions is another key. At present, many excellent databases (CATH, SCOP/SCOP2, Uniprot) have detailed and accurate records of the supersecondary structure domain of proteins, and we realize that it may be feasible to study proteins with more complex functions by using domain as a module.At the same time, the research work of domain will also play an important role in the development of synthetic biology in the future. The structural domain research can not only provide appropriate bricks for the design of new proteins, but also Clues to the evolution of life. ")])])])])])])])}],s={data:function(){return{activeNames:["1"]}},methods:{handleChange:function(e){console.log(e)}}},n=s,r=a("2877"),l=Object(r["a"])(n,i,o,!1,null,"c352d8d8",null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0b95b7.b05e990e.js.map