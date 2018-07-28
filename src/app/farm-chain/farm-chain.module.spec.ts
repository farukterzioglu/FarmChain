import { FarmChainModule } from './farm-chain.module';

describe('FarmChainModule', () => {
  let farmChainModule: FarmChainModule;

  beforeEach(() => {
    farmChainModule = new FarmChainModule();
  });

  it('should create an instance', () => {
    expect(farmChainModule).toBeTruthy();
  });
});
