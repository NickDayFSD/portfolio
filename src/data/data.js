/* eslint-disable max-len */

const SOAK = new URL('../assets/soakapp.png', import.meta.url);
const fingerPaint = new URL('../assets/Fingerpaint.jpeg', import.meta.url);
const globe = new URL('../assets/LocalImpact1.png', import.meta.url);
const marketScrape = new URL('../assets/Market.png', import.meta.url);
const tuneMatch = new URL('../assets/TuneMatchRadio.png', import.meta.url);

export const projects = [
  {
    id: '5',
    title: 'SOAK: What Where When',
    stack: 'ReactJs, SCSS, PWA',
    website: 'https://soakpdx.app/',
    github: 'https://github.com/WWW-Wizards/SOAK-WWW',
    image: SOAK,
    description: [
      'A Progressive Web App with offline use designed to navigate weekend long event and festival schedules.',

      'View by day with past event filtering. Favorite and filter out non-favorite events. Search by title, description, and location.',

      'Can be adapted to any event.'
    
    ]
  },
  {
    id: '4',
    title: 'Fingerpaint',
    stack: 'ReactJs, Material UI, SCSS, PWA',
    website: 'https://fingerpaint.netlify.app/',
    github: 'https://github.com/Meraki-Studio/fingerpaint',
    image: fingerPaint,
    description: [
      'Fingerpaint: making digital design tools accessible and fun for your child.',
    
      'At last, a mobile app that preliterate kids can enjoy right off the bat. Designed for children ages 2 - 5, Fingerpaint equips your child with basic design tools that are intuitive to navigate.',
    
      'Fingerpaint is a Progressive Web App built using the React Framework and Material UI for the front-end components. We also utilized React-Canvas-Draw and React Color in order to make the canvas more accessible and appealing to young children.'
    ]
  },
  {
    id: '3',
    title: 'Tune Match',
    stack: 'ReactJs, arcGIS, CSS',
    website: 'https://elated-brattain-3eaa48.netlify.app/',
    github: 'https://github.com/NC2K',
    image: tuneMatch,
    description: [
      'Let\'s play a game!', 
      'Tune match tests your knowledge of music based on your selected category.',
      'You have 15 seconds to guess each song title before you move onto the next song. Guess it right to accumulate points.',
      'See a leaderboard at the end of your game to find out how you compare with your peers!'
    ]
  },
  {
    id: '1',
    title: 'Local Impact',
    stack: 'ReactJs, arcGIS, CSS',
    website: 'http://local-impact.netlify.app',
    github: 'https://github.com/AuNiTu/Local-Impact',
    image: globe,
    description: [
      'Local Impact is a web app designed to show you some of the climate change factors in your area using ArcGIS maps from ESRI.',

      'How is your area impacting climate change? What can you do to make an impact?',
    
      'Whether you wish to make changes to your habits or legislature, we\'re here to help you figure out where to start.'
    ],
    code: {
      front: 
      `
    function MapView() {
      const { location } = useGeoLocation();
      const { setAddress } = useAddress();
    
      const { update } = useUpdate();
      const { session } = useSession();
    
      const { dbLocation, setDbLocation } = useDbLocation();
      const [changeLocation, setChangeLocation] = useState(true);
      const [searchLoc, setSearchLoc] = useState();
    
      const { value, setValue } = useValue();
      const [Maps] = useState([
        <FireMap />,
        <AirBlotchMap />,
        <AirSensorMap />,
        <PowerPlantsMap />,
        <AltFuelMap />,
      ]);
    
      const handleSubmitGeoLocation = (e) => {
        e.preventDefault();
        setChangeLocation(true);
    
        navigator.geolocation.getCurrentPosition((position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
    
          setDbLocation([longitude, latitude]);
        });
      };
    
      const handleChange = ({ target }) => {
        setSearchLoc(target.value);
      };
    
      const handleAddressChange = (e) => {
        e.preventDefault();
        setAddress(searchLoc);
        setChangeLocation(true);
        setSearchLoc('');
      };
    
      const handlePut = () => {
        update(session.username, dbLocation[0], dbLocation[1]);
      };
    
      useEffect(() => {
        if (location[0] !== undefined) setDbLocation(location);
      }, [location]);
    
      useEffect(() => {
        setChangeLocation(false);
      }, [dbLocation]);
    
      return (
        <>
          <section className={styles.MapViewContainer}>
            <div className={styles.Location}>
              <form onSubmit={handleAddressChange}>
                <input
                  type="text"
                  placeholder="enter address or click get location 🌐"
                  value={searchLoc}
                  onChange={handleChange}
                />
                <button>Find</button>
              </form>
    
              <button onClick={handleSubmitGeoLocation}>Get My Location</button>
              <button onClick={handlePut}>Commit Location to My Account</button>
            </div>
          </section>
    
          {changeLocation ? <FetchingMap /> : Maps[value]}
    
          <section className={styles.mapSelectContainer}>
            <select
              className={styles.mapSelect}
              onChange={(e) => setValue(e.currentTarget.value)}
            >
              {webMaps.map(({ id, name }) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </select>
          </section>
        </>
      );
    }
    
      export default MapView;`
    }
  },
  {
    id: '2',
    title: 'Market Scrape',
    stack: 'Javascript, React Native, Postgres SQL, Discord',
    website: 'https://expo.dev/@jdpdx1/scrape-front',
    github: 'https://github.com/scrape-apes',
    icon: marketScrape,
    description: [
      'A mobile app and discord bot that aggregates posts from multiple 2nd hand marketplace sources and displays them based on your search criteria', 
      'Marketplaces include Varage Sale and Craigslist.'],
  }
];

export const techStack = [
  {
    title: 'Languages',
    items: ['Javascript', 'HTML', 'CSS', 'C#', 'C++']
  },
  {
    title: 'Frameworks',
    items: ['Node.js', 'React', 'Express', 'Webpack', 'Parcel']
  },
  {
    title: 'Tools',
    items: ['Github', 'Heroku', 'Netlify', 'Postman', 'pgAdmin', 'VS Code', 'PostgreSQL']
  },
  {
    title: 'API/Libraries',
    items: ['React Native', 'Twilio', 'React Testing Library', 'jest', 'ArcGIS Hooks']
  },
];

export const specialties = [
  {
    title: 'Creative',
    description: '',
    basics: '',
    details: ''
  },
  {
    title: 'Developer',
    description: '',
    basics: '',
    details: ''
  },
  {
    title: 'Communicator',
    description: '',
    basics: '',
    details: ''
  },
]
