import { IMarket } from './entities';
import markets from './mocks';
import { Request, Response } from 'express';

class MarketController {
  public static getInstance() {
    if (!MarketController.instance) {
      MarketController.instance = new MarketController();
    }

    return MarketController.instance;
  }
  private static instance: MarketController;

  /**
   * Get market list.
   * @returns IMarket[]
   */
  public async list(req: Request, res: Response) {
    try {
      res.send({ error: false, data:  markets});
    } catch (e) {
      res.status(500).send({ error: true, data: e });
    }
  };
}

export default MarketController.getInstance();
