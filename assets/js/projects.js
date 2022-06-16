var list_of_projects = [
    { "date":"06-06-2022",
        "topic":"software dependability",
        "title":"Ecomobility",
        "github":"https://github.com/BenedettoSimone/eco-mobility",
        "paper":""
    },
    { "date":"08-06-2022",
        "topic":"software dependability",
        "title":"Ecomobility2",
        "github":"https://github.com/BenedettoSimone/eco-mobility",
        "paper":""
    },



];

/**
 * Generic sorting function by field
 */
const sort_by = (field, reverse, primer) => {

    const key = primer ?
        function(x) {
            return primer(x[field])
        } :
        function(x) {
            return x[field]
        };

    reverse = !reverse ? 1 : -1;

    return function(a, b) {
        return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
    }
}


//set initial order descendant
var state=1;

window.onload = insert_cards(state);


/**
 * Sort list onclick
 */
function onclick_sort(){

    const node = document.getElementsByClassName("wrapper-flex");
    while (node[0].firstChild) {
        node[0].removeChild(node[0].lastChild);
    }

    if (state==1){
        state=0;
        insert_cards(state)
    }
    else{
        state=1;
        insert_cards(state)
    }

}


/**
 * Create list of card
 * Param: 0 = ascending; 1 = descending;
 */
function insert_cards(sorting_mode){

    const main_div_project = document.getElementsByClassName("wrapper-flex");

    if(sorting_mode==0) {

        list_of_projects.sort(sort_by('date', false, parseInt));
    }else{
        list_of_projects.sort(sort_by('date', true, parseInt));
    }

    for(let i=0; i<list_of_projects.length; i++){

        //card object
        const divCard = document.createElement("div");
        divCard.classList.add("card");

        //left card to contain image
        const leftCard = document.createElement("div");
        leftCard.classList.add("left-card");

        //right card to contain content
        const rightCard = document.createElement("div");
        rightCard.classList.add("right-card");

        const topic = document.createElement("h5");
        topic.classList.add("topic");
        topic.classList.add("gradient");
        topic.innerHTML = list_of_projects[i].topic + list_of_projects[i].date;

        const title = document.createElement("h3");
        title.classList.add("title-project");
        title.innerHTML = list_of_projects[i].title;

        const externalLinks = document.createElement("div");
        externalLinks.classList.add("external-links");


        if(list_of_projects[i].github != ""){
            const git_link = document.createElement("a");
            git_link.classList.add("github");
            git_link.href = list_of_projects[i].github;
            git_link.target = "_blank";
            const git_child = document.createElement("i");
            git_child.classList.add("bx");
            git_child.classList.add("bxl-github");
            git_link.append(git_child);

            externalLinks.append(git_link);
        }

        if(list_of_projects[i].paper != ""){
            const paper_link = document.createElement("a");
            paper_link.classList.add("paper");
            paper_link.href = list_of_projects[i].paper;
            paper_link.target="_blank";
            const paper_child = document.createElement("i");
            paper_child.classList.add("bx");
            paper_child.classList.add("bxs-file-pdf");
            paper_link.append(paper_child);

            externalLinks.append(paper_link);
        }


        rightCard.append(topic);
        rightCard.append(title);
        rightCard.append(externalLinks);

        divCard.append(leftCard);
        divCard.append(rightCard);

        main_div_project[0].append(divCard);


    }
}






