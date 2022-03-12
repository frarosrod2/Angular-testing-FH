import { TestBed } from '@angular/core/testing';
import { PokemonService } from '../../../app/basic/services/pokemon.service';
import { HttpClientModule } from '@angular/common/http';

describe('CharizardService', () => {
  let service: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(PokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('bring info', (done) => {
    service.getPokemon(1).subscribe((pokemon) => {
      expect(pokemon.name).toBe('bulbasaur');
      done();
    });
  });
});
