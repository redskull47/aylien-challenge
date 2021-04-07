import { render, fireEvent, waitFor, screen } from '../../../../test-utils';
import '@testing-library/jest-dom/extend-expect';

import StoriesList from './storiesList';

describe('Stories List', () => {
  test('renders component', () => {
    render(<StoriesList />, {
      initialState: {
        autocompletes: [],
        stories: {
          stories: {
            pending: false,
            term: 'test',
            next_page_cursor: '*',
            list: [
              {
              author: {
                id: 3462076,
                name: ''
              },
              body: 'There is still a lot to do before we can enjoy Jupiter\'s Legacy, the first Millarworld series to reach Netflix. Within the agreement signed with the acclaimed comic book writer Mark Millar, and the new trailer that has been presented today seems to indicate that it will be a true past that will delight fans of the comic series. You can see the trailer below: The cast of Jupiter\'s Legacy is comprised of Josh Duhamel (Transformers: Dark of the Moon), Leslie Bibb (Iron Man), Ben Daniels (The Crown), Ian Quinlan (The Long Way Home), Elena Kampouris (My Great Greek Wedding 2) and Andrew Horton (It Came from the Desert). Synopsis After spending nearly a century protecting humanity, the first generation of superheroes must pass the baton on to their children to carry on their legacy. But tensions mount when young people, eager to prove their worth, fail to live up to either the legendary public reputation of their parents or their demanding personal standards. About the series Based on the comic book series first published in 2013, written by Mark Millar, drawn by Frank Quitely, colored and lettered by Peter Doherty, and published by Image Comics. Jupiter\'s Legacy is an epic superhero drama that spans decades and exposes the complex dynamics of family, power, and loyalty. Sang Kyu Kim is the showrunner and executive producer of the series. Millar, James Middleton, Lorenzo Di Bonaventura, Dan McDermott and Frank Quitely also serve as executive producers. Josh Duhamel, Leslie Bibb, Ben Daniels, Elena Kampouris, Andrew Horton, Mike Wade and Matt Lanter make up the cast. What do you think? Eager to see it?',
              characters_count: 1622,
              clusters: [
                189788093
              ],
              id: 3256384700,
              language: 'en',
              links: {
                permalink: 'https://www.explica.co/what-a-barbarity-the-new-trailer-for-jupiters-legacy.html',
                related_stories: '/related_stories?story_id=3256384700',
                clusters: '/stories?clusters[]=189788093'
              },
              media: [
                {
                  content_length: 71627,
                  format: 'JPEG',
                  height: 474,
                  type: 'image',
                  url: 'https://www.explica.co/wp-content/uploads/2021/04/imagen-del-reparto-de-jupiters-legacy-833x474.jpeg',
                  width: 833
                }
              ],
              paragraphs_count: 1,
              published_at: '2021-04-07T21:09:36Z',
              sentences_count: 12,
              social_shares_count: {
                facebook: [],
                google_plus: [],
                linkedin: [],
                reddit: []
              },
              source: {
                domain: 'explica.co',
                home_page_url: 'https://www.explica.co/',
                id: 119183,
                locations: [
                  {
                    country: 'CO'
                  }
                ],
                logo_url: '',
                name: 'Explica.co',
                scopes: []
              },
              summary: {
                sentences: [
                  'There is still a lot to do before we can enjoy Jupiter\'s Legacy, the first Millarworld series to reach Netflix.',
                  'Within the agreement signed with the acclaimed comic book writer Mark Millar, and the new trailer that has been presented today seems to indicate that it will be a true past that will delight fans of the comic series.',
                  'You can see the trailer below: The cast of Jupiter\'s Legacy is comprised of Josh Duhamel (Transformers: Dark of the Moon), Leslie Bibb (Iron Man), Ben Daniels (The Crown), Ian Quinlan (The Long Way Home), Elena Kampouris (My Great Greek Wedding 2) and Andrew Horton (It Came from the Desert).',
                  'About the series Based on the comic book series first published in 2013, written by Mark Millar, drawn by Frank Quitely, colored and lettered by Peter Doherty, and published by Image Comics.',
                  'Josh Duhamel, Leslie Bibb, Ben Daniels, Elena Kampouris, Andrew Horton, Mike Wade and Matt Lanter make up the cast.'
                ]
              },
              title: 'What a barbarity the new trailer for Jupiter\'s Legacy',
              words_count: 274,
              license_type: 0
            }]
          }
        }
      }
    });
    
    const loadMoreButton = screen.getByText('Load more...');
    const storyTitle = screen.getByText('What a barbarity the new trailer for Jupiter\'s Legacy');

    expect(loadMoreButton).toBeInTheDocument();
    expect(storyTitle).toBeInTheDocument();
    
  });
});