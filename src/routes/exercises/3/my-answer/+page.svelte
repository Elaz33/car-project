<script lang="ts">
    class Student {
        constructor(
            public firstName: string,
            public lastName: string,
            public section: string
        ) {}
    }
    const letters = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");

    const sectionNames1 = "A - H";
    const sectionNames2 = "I - Q";
    const sectionNames3 = "R - Z";

    // the 3 parts of the alphabet
    const section1Letters = letters.slice(0, 8);
    const section2Letters = letters.slice(8, 17);
    const section3Letters = letters.slice(17, 26);

    const studentNames = [
        "Thea Payne",
        "Edward Wright",
        "Lily Le",
        "Damien Chavez",
        "Nevaeh Matthews",
        "Preston Kennedy",
        "Brianna Glass",
        "Allan Hayes",
        "Iris Arias",
        "Alec Lewis",
        "Ellie Gilmore",
        "Vihaan McGee",
        "Kayleigh Reyes",
        "Eli Romero",
        "Eliza McLean",
        "Crosby Erickson",
        "Sabrina Solis",
        "Ronin Benson",
        "Collins Harvey",
        "Cayden Curtis",
        "Alexis Suarez",
        "Soren Mitchell",
        "Willow Barnett",
        "Stephen Shelton",
        "Makenzie Alfaro",
        "Xzavier Murray",
        "Faith Lawson",
        "Lane Schneider",
        "Delaney Bravo",
        "Genesis Enriquez",
        "Nellie Gould",
        "Blaine Zuniga",
        "Leslie Martin",
        "Mateo Gardner",
        "Jordyn French",
        "Corey Moreno",
        "Mary Jennings",
        "Corbin Higgins",
        "Leighton Curtis",
        "Muhammad Terry",
        "Wren Stafford",
        "Alfredo Wells",
        "Cecilia Buchanan",
        "Enrique Madden",
        "Violette McLean",
        "Crosby Bond",
        "Alena Byrd",
        "Cristian Lim",
        "Giavanna Ball",
        "Shane Clayton",
        "Saige McMahon",
        "Jakob Garner",
        "Jacqueline Palacios",
        "Thaddeus Rubio",
        "Hadassah Chavez",
        "Ian Dougherty",
        "Alisson Moyer",
        "Ahmir Arnold",
        "Finley Soto",
        "Barrett Farmer",
        "Madelynn Galindo",
        "Salvatore Avalos",
        "Paloma Rush",
        "Kaiser Singh",
        "Vivienne Frederick",
        "Kase Young",
        "Zoey Benton",
        "Jamal Arias",
        "Aleah Eaton",
        "Leighton Donovan",
        "Azariah Mayer",
        "Yahir Leach",
        "Martha Mitchell",
        "Jaxon Nava",
        "Scout Nielsen",
        "Tru Harvey",
        "Nicole Arellano",
        "Kellan Lim",
        "Giavanna Ramos",
        "Angel Todd",
        "Zariah Orozco",
        "Keanu Landry",
        "Brynleigh Bravo",
        "Genesis Chang",
        "Ophelia Strong",
        "Axl Stein",
        "Leilany Doyle",
        "Kashton Simpson",
        "Anastasia Fitzpatrick",
        "Blaze Short",
        "Cheyenne Hoover",
        "Jaziel Hampton",
        "Leona Hayden",
        "Leroy Holland",
        "Mariah Camacho",
        "Tatum O’brien",
        "Joanna Ayala",
        "Tanner Curry",
        "Alison Murphy",
        "Cameron Watts",
    ];
    // function to split the strings of the students in the array
    function splitsString(array: string[]): string[][] {
        const newArr = [];
        for (let i = 0; i < array.length; i++) {
            newArr.push(array[i].split(" "));
        }
        return newArr;
    }
    function assignSection(student:Student):Student{
       if (section1Letters.some((s1) => s1 === student.lastName.charAt(0))) {
            student.section = sectionNames1;
        } else if (section2Letters.some((s2) => s2 === student.lastName.charAt(0))) {
            student.section = sectionNames2;
        } else if (section3Letters.some((s3) => s3 === student.lastName.charAt(0))) {
            student.section = sectionNames3;
        }
        return student;
    }
    
    const splitNames = splitsString(studentNames);

    // instantiating the class with the student names have not dealt with section yet
    const classOfStudents = splitNames.map(
        (names) => new Student(names[0], names[1], "")
    );
    // sorting the student class to be alphabetical order
   classOfStudents.sort((a, b) => a.lastName.localeCompare(b.lastName));
    // populating the sections
    for (const s of classOfStudents) {
        assignSection(s)
    }
    console.log(classOfStudents);
</script>

<h1 class="head-line">Class of 2023</h1>
<section class="group">
    <p class="text">Section: A-H</p>
    {#each classOfStudents as cos}
        {#if cos.section == "A - H"}
            <pre class="name-holder">
                    {cos.lastName},{cos.firstName}                    
                </pre>
        {/if}
    {/each}
</section>

<section class="group">
    <p class="text">Section: I-Q</p>
    {#each classOfStudents as cos}
        {#if cos.section === "I - Q"}
            <pre class="name-holder">
                    {cos.lastName},{cos.firstName}                  
                </pre>
        {/if}
    {/each}
</section>

<section class="group">
    <p class="text">Section: R-Z</p>
    {#each classOfStudents as cos}
        {#if cos.section === "R - Z"}
            <pre class="name-holder">
                    {cos.lastName},{cos.firstName}                   
                </pre>
        {/if}
    {/each}
</section>

<style>
    :global(body) {
        background-color: rgb(174, 162, 57);
    }
    .head-line {
        text-align: center;
    }
    .group {
        text-align: center;
    }
    .name-holder {
        text-align: center;
        margin-right: 17px;
    }
    .text {
        text-align: center;
        font-size: larger;
        color: blueviolet;
    }
</style>
