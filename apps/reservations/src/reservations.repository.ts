import { AbstractRepository } from '@app/common';
import { Injectable, Logger } from '@nestjs/common';
import { ReservationDocument } from './models/reservation.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ReservationRepositoty extends AbstractRepository<ReservationDocument> {
  protected readonly logger: Logger = new Logger(ReservationRepositoty.name);

  constructor(
    @InjectModel(ReservationDocument.name)
    reservationsModel: Model<ReservationDocument>,
  ) {
    super(reservationsModel);
  }
}
