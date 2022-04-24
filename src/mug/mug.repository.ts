import { Mug } from "../entity/mug.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Mug)
export class MugRepository extends Repository<Mug> {

}
