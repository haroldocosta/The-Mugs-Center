import { EntityRepository, Repository } from "typeorm";
import { Mug } from "./mug.entity";

@EntityRepository(Mug)
export class MugRepository extends Repository<Mug> {

}
