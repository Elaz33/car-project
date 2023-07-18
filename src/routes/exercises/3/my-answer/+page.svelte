<script lang="ts">
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const UpperAlpha = alphabet.toUpperCase();
    const finalAlpha = UpperAlpha.split("");

    const sectionNames1 = "A - H";
    const sectionNames2 = "I - Q";
    const sectionNames3 = "R - Z";

    // the 3 parts of the alphabet
    const part1 = finalAlpha.slice(0, 8);
    const part2 = finalAlpha.slice(8, 17);
    const part3 = finalAlpha.slice(17, 26);

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
    function splitTheStrings(array: String[]) {
        const newArr = [];
        for (let i = 0; i < array.length; i++) {
            newArr.push(array[i].split(" "));
        }
        return newArr;
    }
    const splitStrings = splitTheStrings(studentNames);

    class Student {
        firstName;
        lastName;
        section;
        constructor(firstName: string, lastName: string, section: string) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.section = section;
        }
    }
    // instantiating the class with the student names have not dealt with section yet
    const finalResult = splitStrings.map(
        (names) => new Student(names[0], names[1], "")
    );
    // sorting the student class to be alphabetical order
    finalResult.sort((a, b) => a.lastName.localeCompare(b.lastName));
    // populating the sections
    finalResult.forEach((s) => {
        part1.forEach((a) => {
            part2.forEach((b) => {
                part3.forEach((c) => {
                    if (s.lastName.charAt(0) === a) {
                        s.section = sectionNames1;
                    } else if (s.lastName.charAt(0) === b) {
                        s.section = sectionNames2;
                    } else if (s.lastName.charAt(0) === c) {
                        s.section = sectionNames3;
                    }
                });
            });
        });
    });
</script>

<h1 class="head-line">Class of 2023</h1>
<section class="group">
    <p class="text">Section: A-H</p>
    {#each finalResult as final}
        {#each part1 as p1}
            {#if final.lastName.charAt(0) === p1}
                <pre class="name-holder">
                    {final.lastName} 
                    {final.firstName}  
                </pre>
            {/if}
        {/each}
    {/each}
</section>
<section class="group">
    <p class="text">Section: I-Q</p>
    {#each finalResult as final}
        {#each part2 as p2}
            {#if final.lastName.charAt(0) === p2}
                <pre class="name-holder">
                    {final.lastName} 
                    {final.firstName} 
                </pre>
            {/if}
        {/each}
    {/each}
</section>
<section class="group">
    <p class="text">Section: R-Z</p>
    {#each finalResult as final}
        {#each part3 as p3}
            {#if final.lastName.charAt(0) === p3}
                <pre class="name-holder">
                    {final.lastName} 
                    {final.firstName} 
                </pre>
            {/if}
        {/each}
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
        margin-right: 100px;
    }
    .text {
        text-align: center;
        font-size: larger;
        color: blueviolet;
    }
</style>
