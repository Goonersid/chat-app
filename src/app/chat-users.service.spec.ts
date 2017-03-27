import { TestBed, inject } from '@angular/core/testing';

import { ChatUsersService } from './chat-users.service';

describe('ChatUsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatUsersService]
    });
  });

  it('should ...', inject([ChatUsersService], (service: ChatUsersService) => {
    expect(service).toBeTruthy();
  }));
});
