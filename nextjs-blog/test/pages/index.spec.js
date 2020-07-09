import React from 'react';
import TestRenderer from 'react-test-renderer';

import Home from "../../pages";

describe('Index Page', () => {
    let testRenderer ,
        testInstance ;

    beforeEach(() => {
        testRenderer  = TestRenderer.create(<Home />);
        testInstance = testRenderer.root;
    });

   it('Should pass test', () => {
       expect(true).toBeTruthy();
   });

   it('Should have h1', () => {
      let renderedh1 = testInstance.findByType('h1');

      expect(renderedh1.children[0]).toBe('Welcome to ');
   });
});
