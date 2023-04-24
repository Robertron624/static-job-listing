# Frontend Mentor - Job listings with filtering solution

This is a solution to the [Job listings with filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Filter job listings based on the categories

### Screenshot

### Links

- Solution URL: [Solution URL](https://github.com/Robertron624/static-job-listing)
- Live Site URL: [Live site URL](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Sass](https://sass-lang.com/) - For styles

### What I learned

With this project I learned how to filter rendering elements according to some keywords, in this case the keywords are the languages and tools that are required for the job. I also learned how to use the filter method to filter the elements that are rendered.

The code below shows how I filtered the elements that are rendered according to the keywords.

```js
    const [jobs, setJobs] = useState(data);

    const [filters, setFilters] = useState([]);

    const removeFilter = (keyword) => {
      setFilters(filters.filter((filter) => filter !== keyword))
    }

    useEffect(() => {
        if (filters.length === 0) {
            setJobs(data);
            return;
        }

        const filteredJobs = data.filter((job) => {
            const { role, level, languages, tools } = job;
            const tags = [role, level, ...languages, ...tools];

            return filters.every((filter) => tags.includes(filter));
        });

        setJobs(filteredJobs);
    }, [filters])
```

### Continued development

I want to keep improving my skills in React and also in CSS/Sass. I want to keep working in projects that required filtered data and maybe add some animations o graphics library.

### Useful resources

- [How to Filter an Array of Objects in React](https://bobbyhadz.com/blog/react-filter-array-of-objects) - This helped me for handling the filter of the data, It was explained in a very simple way and I'd recommend it to anyone still learning this concept.
## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)